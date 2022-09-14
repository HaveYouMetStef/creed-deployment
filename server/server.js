const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

// Middleware
app.use(express.static(path.join(__dirname, "../public")))
app.use("/images", express.static(path.join(__dirname, "../images")))
app.use("/public/index.css", express.static(path.join(__dirname, "../public/index.css")))


const port = process.env.PORT || 1994;

app.listen(port, () => {
    console.log(`We are on port ${port}`);
})