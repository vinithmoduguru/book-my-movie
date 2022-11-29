import { useNavigate, useSearchParams } from "react-router-dom"
import MOVIE_DATA from "../../movies-data.json"
import { Button } from "../../Components/Button/button.styles"
import Seat, { SEAT_TYPE_CLASSES } from "../Seat/seat.component"
import {
  BookingContainer,
  SeatContainer,
  SeatRow,
  Screen,
} from "./seats.styles"
import { useContext, useState } from "react"
import { BookingContext } from "../../Contexts/booking.context"
// import { useElements, useStripe } from "@stripe/react-stripe-js"
const Seats = () => {
  const [searchparams] = useSearchParams()
  const query_id = searchparams.get("id")

  //   const elements = useElements()
  //   const stripe = useStripe()
  //   const submitHandler = async (e) => {
  //     e.preventDefault()
  //     if (!stripe || !elements) {
  //       return
  //     }
  //   }
  const { rows, columns, bookingTotal, movieMap } = useContext(BookingContext)
  const movie = movieMap.filter((movie) => movie.id === query_id)[0]
  const {
    seat: { blocked },
  } = movie
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
                  blocked.size > 0 && blocked.has(id)
                    ? SEAT_TYPE_CLASSES.blocked
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
      <Button>Pay ₹{bookingTotal}</Button>
    </BookingContainer>
  )
}
export default Seats
