const cookieParser = require("cookie-parser");
const express = require("express")
const path = require("path")
const app = express();
const db = require("./config/mongoose.connection")
const expressSession = require("express-session")

const flash = require("connect-flash")



const ownersRouter = require("./routes/ownersRouter")
const productsRouter = require("./routes/productsRouter")
const usersRouter = require("./routes/usersRouter")
const indexRouter = require("./routes/index")

require("dotenv").config();
const PORT = process.env.PORT || 3000;





app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
)
app.use(flash())



app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")


app.use(indexRouter)
app.use("/owners", ownersRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})