const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./luckydraw.db", (err) => {
  if (err) {
    console.error("Database connection error:", err)
  } else {
    console.log("Connected to SQLite database")
  }
})

db.serialize(() => {

  db.run(`
    CREATE TABLE IF NOT EXISTS draws (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      staff_name TEXT NOT NULL,
      staff_id TEXT NOT NULL,
      event_code TEXT NOT NULL,
      event_date TEXT NOT NULL,
      venue_type TEXT NOT NULL,
      seat1 TEXT NOT NULL,
      seat2 TEXT NOT NULL,
      seat3 TEXT NOT NULL,
      created_at TEXT
    )
  `)

})

module.exports = db