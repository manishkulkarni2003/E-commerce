const cookieParser = require("cookie-parser");
const express = require("express")
const path = require("path")
const app = express();

PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(_dirname, "public")))
app.set("view engine", "ejs")



app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})