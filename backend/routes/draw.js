const express = require("express")
const router = express.Router()
const db = require("../db/database")
const generateSeats = require("../services/seatGenerator")

router.post("/", (req, res) => {

  const { staff_name, staff_id, event_code, event_date, venue_type } = req.body

  const checkSQL = `
    SELECT * FROM draws
    WHERE event_code = ?
    AND event_date = ?
  `

  db.get(checkSQL, [event_code, event_date], (err, row) => {

    if (err) {
      console.error(err)
      return res.status(500).json({ success:false })
    }

    if (row) {
      return res.status(400).json({
        success:false,
        message:`Lucky draw already conducted for event ${event_code} on ${event_date}`
      })
    }

    const seats = generateSeats(venue_type)

    const insertSQL = `
      INSERT INTO draws
      (staff_name, staff_id, event_code, event_date, venue_type, seat1, seat2, seat3, created_at)
      VALUES (?,?,?,?,?,?,?,?,?)
    `

    db.run(insertSQL, [
      staff_name,
      staff_id,
      event_code,
      event_date,
      venue_type,
      seats[0],
      seats[1],
      seats[2],
      new Date().toISOString()
    ], function(err){

      if(err){
        console.error(err)
        return res.status(500).json({ success:false })
      }

      res.json({
        success:true,
        seats
      })

    })

  })

})

module.exports = router