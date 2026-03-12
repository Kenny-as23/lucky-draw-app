function getVenueLayout(venue) {

  if (venue === "Studio Room") {
    return {
      maxRow: 10,
      seats: ["A","B","C","D"]
    }
  }

  if (venue === "Concert Hall") {
    return {
      maxRow: 30,
      seats: ["A","B","C","D","E","F"]
    }
  }

  if (venue === "Open Arena") {
    return {
      maxRow: 50,
      seats: ["A","B","C","D","E","F","G","H"]
    }
  }

}

function randomSeat(maxRow, seats) {

  const row = Math.floor(Math.random() * maxRow) + 1

  const letter = seats[Math.floor(Math.random() * seats.length)]

  return row + letter

}

function generateSeats(venue) {

  const layout = getVenueLayout(venue)

  const generated = new Set()

  while (generated.size < 3) {

    const seat = randomSeat(layout.maxRow, layout.seats)

    generated.add(seat)

  }

  return Array.from(generated)

}

module.exports = generateSeats