const express = require('express')

const router = express.Router();
const ownerModel = require("../models/owner.model")


router.get("/", (req, res) => {
    res.send("owner Router");
})

router.post("/create", async (req, res) => {
    const ownersExist = await ownerModel.find();
    if (ownersExist.length > 0) {
        return res.status(400).send({ message: "Owner already exist" })
    };
    const { fullname, email, password } = req.body
    const owner = await ownerModel.create({
        fullname,
        email,
        password

    })
    res.status(201).send({ message: "Owner created successfully", owner })

    res.send("We can create a Owner")


})


module.exports = router;