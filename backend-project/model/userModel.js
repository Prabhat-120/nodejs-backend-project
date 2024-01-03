const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        dob: {
            type: String,
            required: true,
        },
        
    },
    { timestamps: true }
);

const UserModel = mongoose.model("usertb", UserSchema);
module.exports = UserModel;