const express = require("express")

const router = express.Router()
const isLoggedin = require("../middlewares/isLoggedin")
const productModel = require("../models/product.model")
const userModel = require("../models/user.model")

router.get("/", (req, res) => {
    res.render("index", { error: '', loggedin: false })
})

router.get("/shop", isLoggedin, async function (req, res) {
    let products = await productModel.find();
    let success = req.flash("success")
    res.render("shop", { products, success })

})
router.get("/cart", isLoggedin, async function (req, res) {
    let user = await userModel.findOne({ email: req.user.email }).populate("cart")

    let totalBill = 0;

    user.cart.forEach(item => {
        const itemBill = (Number(item.price) + 20) - Number(item.discount)
        totalBill = itemBill;
    })


    res.render("cart", { user, bill: totalBill });


})

router.get("/addtocart/:productid", isLoggedin, async function (req, res) {
    let user = await userModel.findOne({ email: req.user.email })
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success", "Added to Cart")
    res.redirect("/shop")


})



module.exports = router;
