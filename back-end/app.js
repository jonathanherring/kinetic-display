const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 3000
const fans = require("./routes/fan_rts.js")

app.use(cors())
app.use(fans)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found")
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {}
  })
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
