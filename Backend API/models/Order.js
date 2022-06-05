const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
    {
        userId: { type: String, required: true, },
        fName: { type: String, required: true },
        lName: { type: String, required: true },
        // IdNumber: { type: Number, required: true },
        phoneNumber: { type: Number, required: true },
        orderItems: [
            {
                title: { type: String, required: true },
                quantity: { type: Number, required: true },
                img: { type: String, required: true },
                price: { type: Number, required: true },
                // product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product" },
            },
        ],
        shippingAddress: {
            city: { type: String, required: true },
            departamento: { type: String, required: true },
            address: { type: String, required: true },
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
// const OrderSchema = new Schema(
//     {
//     userId: { type: String, required: true, },
//         products: [
//             {
//                 productId: { type: String},
//                 quantity: { type: Number, default: 1}
//             }
//         ],
//         amount: { type: Number, require: true},
//         address: { type: Object, required: true},
//         status: { type: String, default: 'pending'}
//     },
//     { timestamps: true }
// );

module.exports = mongoose.model('Order', OrderSchema)