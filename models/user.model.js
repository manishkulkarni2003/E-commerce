const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ecommerce");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwrd: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        default: []
    },
    isadmin: {
        type: Boolean,
        required: true
    },
    orders: {
        type: Array,
        default: []
    },
    contact: {
        type: Number,

    },
    picture: {
        type: String
    }

}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)
