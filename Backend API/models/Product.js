const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        img: { type: String, required: true, unique: true },
        categories: { type: String, required: true, unique: true },
        size: { type: Array },
        price: { type: Number, required: true },
        inStock: { type: Boolean, default: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema)