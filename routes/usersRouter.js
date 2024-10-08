const express = require('express')

const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedin")
const { registerUser, loginUser, logoutUser } = require("../controllers/authController")

router.get("/", (req, res) => {
    res.send("user Router");
})

router.post("/register", registerUser)

router.post("/login", loginUser)
router.get("/logout", logoutUser);

module.exports = router;