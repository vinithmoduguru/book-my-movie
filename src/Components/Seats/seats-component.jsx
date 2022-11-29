import { useNavigate, useSearchParams } from "react-router-dom"
import { Button } from "../../Components/Button/button.styles"
import Seat, { SEAT_TYPE_CLASSES } from "../Seat/seat.component"
import {
  BookingContainer,
  SeatContainer,
  SeatRow,
  Screen,
} from "./seats.styles"
import { useContext, useEffect, useState } from "react"
import { BookingContext } from "../../Contexts/booking.context"
const Seats = () => {
  const {
    rows,
    columns,
    bookingTotal,
    movieMap,
    setMovieMap,
    rowsize,
    columnsize,
    selected,
  } = useContext(BookingContext)
  const [searchparams] = useSearchParams()
  const query_id = searchparams.get("id")
  const movie = movieMap.filter((movie) => movie.id === query_id)[0]
  const {
    seat: { booked },
  } = movie
  const navigate = useNavigate()
  const paymentHandler = () => {
    const newMovieMap = movieMap.map((mv) =>
      mv.id === movie.id
        ? {
            ...mv,
            rowsize: rowsize,
            columnsize: columnsize,
            seat: { booked: selected },
          }
        : mv
    )
    setMovieMap(newMovieMap)
    alert("Selected seats has been booked")
  }

  return (
    <BookingContainer>
      <h1>
        {movie.name}({movie.theatre})
      </h1>

      <Screen></Screen>

      <span>All the eyes this way please!</span>
      <SeatContainer>
        {rows.map((row) => {
          const rowList = (
            <SeatRow>
              <span>{row}</span>
              {columns.map((col) => {
                const id = `${row}:${col}`
                const seatType =
                  booked.size > 0 && booked.has(id)
                    ? SEAT_TYPE_CLASSES.booked
                    : SEAT_TYPE_CLASSES.base
                const colList = (
                  <Seat id={id} seatType={seatType}>
                    {col}
                  </Seat>
                )
                return colList
              })}
              <br />
            </SeatRow>
          )
          return rowList
        })}
      </SeatContainer>
      <Button onClick={paymentHandler}>Pay ₹{bookingTotal}</Button>
    </BookingContainer>
  )
}
export default Seats
