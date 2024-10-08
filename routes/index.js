const express = require("express")

const router = express.Router()
const isLoggedin = require("../middlewares/isLoggedin")
const productModel = require("../models/product.model")

router.get("/", (req, res) => {
    res.render("index", { error: '' })
})

router.get("/shop", isLoggedin, async function (req, res) {
    let products = await productModel.find();
    res.render("shop", { products })

})



module.exports = router;
