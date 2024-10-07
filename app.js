const cookieParser = require("cookie-parser");
const express = require("express")
const path = require("path")
const app = express();
const db = require("./config/mongoose.connection")
const ownersRouter = require("./routes/ownersRouter")
const productsRouter = require("./routes/productsRouter")
const usersRouter = require("./routes/usersRouter")


PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")



app.use("/owners", ownersRouter)
app.use("/users", usersRouter)
app.use("/owners", productsRouter)


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})