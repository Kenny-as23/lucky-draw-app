const express = require("express")
const router = express.Router()
const db = require("../db/database")

router.get("/", (req, res) => {

  const sql = "SELECT * FROM draws ORDER BY created_at DESC"

  db.all(sql, [], (err, rows) => {

    if (err) {
      console.error(err)
      return res.json({
        success: false,
        message: "Database error"
      })
    }

    res.json(rows)

  })

})

module.exports = router