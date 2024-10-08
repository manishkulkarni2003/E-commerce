const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const { generateToken } = require("../utils/generateToken")

module.exports.registerUser = async function (req, res) {
    try {


        const { fullname, email, password } = req.body;

        const existingUser = await userModel.findOne({ email: email })

        if (existingUser) {
            return res.status(400).send("user Already Exists")
        }

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message)
                else {

                    const user = await userModel.create({
                        fullname,
                        email,
                        password: hash
                    })

                    const token = generateToken(user);
                    res.cookie("token", token)
                    res.redirect("/shop")



                    // res.status(200).send("USer created Successfully")
                    // console.log(user)
                }
            })

        })

    } catch (err) {
        console.log(err.message, "Error while creating USer")
    }


}

module.exports.loginUser = async function (req, res) {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email: email });
    if (!user)
        return res.send("Email or password is incorrect");


    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            const token = generateToken(user);
            res.cookie("token", token);
            res.redirect("/shop")
            // res.send("User logged in Successfully");
        }
        else {
            req.flash("Email or password is incorrect");
            return res.redirect("/")

        }

    })
}
module.exports.logoutUser = function (req, res) {
    res.cookie("token", "");
    res.redirect("/")

}