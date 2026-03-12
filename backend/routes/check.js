const express = require("express")
const router = express.Router()
const db = require("../db/database")

router.post("/", (req, res) => {

  const { eventCode, date } = req.body

  const sql = `
    SELECT * FROM draws
    WHERE event_code = ?
    AND event_date = ?
  `

  db.get(sql, [eventCode, date], (err, row) => {

    if (err) {
      console.error(err)
      return res.json({
        success:false,
        message:"Database error"
      })
    }

    res.json({
      exists: row ? true : false
    })

  })

})

module.exports = router