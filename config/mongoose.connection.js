const mongoose = require("mongoose")


mongoose
    .connect("mongodb://localhost:27017/ecommerce")
    .then(function () {
        console.log("mongo db connected")
    })
    .catch(function (err) {
        console.log(err, "Something Went Wrong")
    })

module.exports = mongoose.connection;


