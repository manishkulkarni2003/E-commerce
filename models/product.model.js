const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    image: {
        type: String

    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: {
        type: String
    },
    panelcolor: {
        type: String
    },
    textcolor: {
        type: String
    }

}, { timestamps: true })

module.exports = mongoose.model("product", productSchema)
