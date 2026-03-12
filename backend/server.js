const express = require("express")
const cors = require("cors")

const checkRoute = require("./routes/check")
const drawRoute = require("./routes/draw")
const historyRoute = require("./routes/history")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/check", checkRoute)
app.use("/api/draw", drawRoute)
app.use("/api/history", historyRoute)

// redirect root ke history API
app.get("/", (req, res) => {
  res.redirect("/api/history")
})

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000")
})