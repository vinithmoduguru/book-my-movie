import { createContext, useContext, useEffect, useState } from "react"

const getName = (n) => {
  var ordA = "a".charCodeAt(0)
  var ordZ = "z".charCodeAt(0)
  var len = ordZ - ordA + 1

  var s = ""
  while (n >= 0) {
    s = String.fromCharCode((n % len) + ordA) + s
    n = Math.floor(n / len) - 1
  }
  return s
}

const getRows = (col) => {
  var cols = []
  for (let index = 0; index < col; index++) {
    cols.push(getName(index).toUpperCase())
  }
  return cols
}

const addOrRemoveSeat = (booked, seatToChange) => {
  const existingSeat = booked.find((seat) => seat.id === seatToChange.id)

  if (existingSeat) {
    return booked.filter((seat) => seat.id !== seatToChange.id)
  }

  return [...booked, seatToChange]
}

export const BookingContext = createContext({
  booked: [],
  bookingTotal: 0,
  changeSeatBooking: () => {},
  columns: [],
  rows: [],
})
export const BookingProvider = ({ children }) => {
  const [booked, setBooked] = useState([])
  const [columns, setColumns] = useState([])
  const [columnsize, setColumnsize] = useState(20)
  const [rows, setRows] = useState([])
  const [rowsize, setRowsize] = useState(6)
  const [bookingTotal, setBookingTotal] = useState(0)

  useEffect(() => {
    const columns = [
      ...Array(columnsize > 0 && parseInt(columnsize) + 1).keys(),
    ].slice(1)
    setColumns(columns)
  }, [columnsize])

  useEffect(() => {
    const rows = getRows(rowsize)
    setRows(rows)
  }, [rowsize])

  useEffect(() => {
    const newBookingTotal = booked.length * 200
    setBookingTotal(newBookingTotal)
  }, [booked])

  const changeSeatBooking = (seatToChange) => {
    setBooked(addOrRemoveSeat(booked, seatToChange))
  }
  return (
    <BookingContext.Provider
      value={{
        booked,
        bookingTotal,
        changeSeatBooking,
        columnsize,
        rowsize,
        columns,
        rows,
        setColumnsize,
        setRowsize,
      }}>
      {children}
    </BookingContext.Provider>
  )
}
