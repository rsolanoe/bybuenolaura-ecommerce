const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        fName: { type: String, required: true },
        lName: { type: String, required: true },
        cedula: { type: Number, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema)