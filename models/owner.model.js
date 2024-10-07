const mongoose = require("mongoose")


const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        default: []
    },
    picture: {
        type: String
    },
    gstin: {
        type: String
    }


}, { timestamps: true })

module.exports = mongoose.model("owner", ownerSchema)
