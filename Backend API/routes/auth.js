const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("./verifyToken");

//REGISTER
router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json("User already exists");
        }

        user = new User({
            username: req.body.username,
            email,
            password: CryptoJS.AES.encrypt(
                password,
                process.env.PASS_SEC
            ).toString(),
        });

        newUser = await user.save();

        const accessToken = jwt.sign(
            {
                id: newUser._id,
                isAdmin: newUser.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        res.status(200).json({...newUser._doc, accessToken}); // estudiar
    } catch (error) {
        res.status(500).json({ ok: false, msg: error }); // estudiar
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json("Wrong credentials!");
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(401).json("Wrong credentials!");
        }

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });
    } catch (error) {
        console.log("*****ERROR*****", error);
        res.status(500).json(error);
    }
});

//PROFILE
// router.get("/profile", verifyToken, async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id);
//         const { password, ...other } = user._doc;
//         res.status(200).json(other);
//     } catch (error) {
//         res.status(401).json("User not found");
//     }
// });

//UPDATE PROFILE
// router.put("/profile", verifyToken, async (req, res) => {
//     const user = await User.findById(req.user.id);

//     if (user) {
//         console.log(req.body)
//         user.username = req.body.username || user.username
//         user.email = req.body.email || user.email
//         if (req.body.password) {
//             req.body.password = CryptoJS.AES.encrypt(
//                 req.body.password,
//                 process.env.PASS_SEC
//             ).toString();
//         }
//         const updatedUser = await user.save()
//         const { password, ...other } = updatedUser._doc;
//         res.status(200).json(other)

//     } else {
//         res.status(404).json('User not found')
//     }

 
// });

module.exports = router;
