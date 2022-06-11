const router = require("express").Router();
const {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
    verifyToken,
} = require("./verifyToken");
const Order = require("../models/Order");

const mongoose = require("mongoose");

//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    console.log("LOG 2", newOrder);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params);
        res.status(200).json("Order has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET USER ORDERS
router.get("/find/:userid", verifyTokenAndAuthorization, async (req, res) => {
    try {
        console.log("LOG 1", req.params.userid);
        const orders = await Order.find({ userId: req.params.userid }).sort({
            createdAt: -1,
        });
        console.log("LOG 2", orders);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
});

//GET MONTHLY INCOME
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const qRatio = req.query.ratio;
    const productId = req.query.pid;
    const pid = mongoose.Types.ObjectId(productId);

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(
        new Date().setMonth(lastMonth.getMonth() - 1)
    );
    try {
        if (qRatio) {
            const income = await Order.aggregate([
                { $match: { createdAt: { $gte: previousMonth } } },
                {
                    $project: {
                        month: { $month: "$createdAt" },
                        sales: "$totalPrice",
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: "$sales" },
                    },
                },
            ]).sort({ _id: 1 });
            return res.status(200).json(income);
        }
        if (productId) {
            const income = await Order.aggregate([
                {
                    $match: {
                        createdAt: { $gte: previousMonth },
                        orderItems: { $elemMatch: { _id: pid } },
                    },
                },
                {
                    $project: {
                        month: { $month: "$createdAt" },
                        sales: "$totalPrice",
                        "orderItems._id": 1,
                        "orderItems.quantity": 1,
                        "orderItems.price": 1,
                    },
                },
                {
                    $unwind: "$orderItems",
                },
                {
                    $match: {
                        "orderItems._id": pid,
                    },
                },
                {
                    $project: {
                        month: "$month",
                        sales: {
                            $multiply: [
                                "$orderItems.quantity",
                                "$orderItems.price",
                            ],
                        },
                        // 'orderItems._id': 1,
                        // 'orderItems.quantity': 1,
                        // 'orderItems.price': 1,
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        sales: { $sum: "$sales" },
                    },
                },
            ]).sort({ _id: 1 });

            return res.status(200).json(income);
        }
        const income = await Order.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$totalPrice",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]).sort({ _id: 1 });
        return res.status(200).json(income);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;

