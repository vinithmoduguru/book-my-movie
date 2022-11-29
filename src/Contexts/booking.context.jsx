import { createContext, useContext, useEffect, useState } from "react"
import MOVIE_DATA from "../movies-data.json"

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
  movieMap: {},
})
export const BookingProvider = ({ children }) => {
  const [booked, setBooked] = useState([])
  const [columns, setColumns] = useState([])
  const [columnsize, setColumnsize] = useState(20)
  const [rows, setRows] = useState([])
  const [selected, setSelected] = useState(new Set())
  const [rowsize, setRowsize] = useState(6)
  const [bookingTotal, setBookingTotal] = useState(0)
  const [movieMap, setMovieMap] = useState(MOVIE_DATA)

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
    const newBookingTotal = selected.size * 200
    setBookingTotal(newBookingTotal)
  }, [selected])

  const changeSeatBooking = (seatToChange) => {
    setBooked(addOrRemoveSeat(booked, seatToChange))
  }

  return (
    <BookingContext.Provider
      value={{
        booked,
        bookingTotal,
        changeSeatBooking,
        selected,
        setSelected,
        columnsize,
        rowsize,
        columns,
        rows,
        setColumnsize,
        setRowsize,
        movieMap,
        setMovieMap,
      }}>
      {children}
    </BookingContext.Provider>
  )
}
