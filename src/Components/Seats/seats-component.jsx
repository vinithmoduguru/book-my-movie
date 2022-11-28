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
const Seats = () => {
  const [searchparams] = useSearchParams()
  const query_id = searchparams.get("id")
  const { id, name, price, theatre } = MOVIE_DATA.filter(
    (movie) => movie.id === query_id
  )[0]

  const { rows, columns, bookingTotal } = useContext(BookingContext)

  return (
    <BookingContainer>
      <h1>
        {name}({theatre})
      </h1>

      <Screen></Screen>

      <span>All the eyes this way please!</span>
      <SeatContainer>
        {rows.map((row) => {
          const rowList = (
            <SeatRow>
              <span>{row}</span>
              {columns.map((col) => {
                const colList = (
                  <Seat key={`${row}:${col}`} seatType={SEAT_TYPE_CLASSES.base}>
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
