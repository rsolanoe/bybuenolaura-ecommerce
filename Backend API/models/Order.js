const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
    {
        userId: { type: String, required: true, },
        orderItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product" },
            },
        ],
        shippingAddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            country: { type: String, required: true },
         },
        paymentMethod: {  
            type: String,
            required: true,
            defalt: 'Paypal',///defalt:"Paypal"
         },
        paymentResult: { 
            id: { type:String },
            status: { type:String },
            update_time: { type:String },
            email_address: { type:String },
        }, 
        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },
        paidAt: {
            type: Date,
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        deliveredat: {
            type: Date,
        },
    },
    { timestamps: true }
);
/* const OrderSchema = new Schema(
    {
    userId: { type: String, required: true, },
        products: [
            {
                productId: { type: String},
                quantity: { type: Number, default: 1}
            }
        ],
        amount: { type: Number, require: true},
        address: { type: Object, required: true},
        status: { type: String, default: 'pending'}
    },
    { timestamps: true }
); */

module.exports = mongoose.model('Order', OrderSchema)