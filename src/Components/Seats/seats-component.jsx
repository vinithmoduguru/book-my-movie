import { useSearchParams } from "react-router-dom"
import { Button } from "../../Components/Button/button.styles"
import Seat, { SEAT_TYPE_CLASSES } from "../Seat/seat.component"
import {
  BookingContainer,
  SeatContainer,
  SeatRow,
  Screen,
} from "./seats.styles"
import { useContext } from "react"
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
    setSelected,
  } = useContext(BookingContext)
  const [searchparams] = useSearchParams()
  const query_id = searchparams.get("id")
  const movie = movieMap.filter((movie) => movie.id === query_id)[0]
  const {
    seat: { booked, blocked },
  } = movie

  const paymentHandler = () => {
    console.log(movieMap)
    const newMovieMap = movieMap.map((mv) =>
      mv.id === movie.id
        ? {
            ...mv,
            rowsize: rowsize,
            columnsize: columnsize,
            seat: {
              ...mv.seat,
              booked: booked ? new Set([...selected, ...booked]) : selected,
            },
          }
        : mv
    )
    setSelected(new Set())
    setMovieMap(newMovieMap)
    console.log(newMovieMap)
    alert("Selected seats has been booked")
  }

  const getSeatType = (id) => {
    if (blocked && blocked.has(id)) {
      return SEAT_TYPE_CLASSES.blocked
    } else if (booked && booked.has(id)) {
      return SEAT_TYPE_CLASSES.booked
    } else {
      return SEAT_TYPE_CLASSES.base
    }
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
                const seatType = getSeatType(id)
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

      {selected.size > 0 && (
        <Button onClick={paymentHandler}>Pay ₹{bookingTotal}</Button>
      )}
    </BookingContainer>
  )
}
export default Seats
