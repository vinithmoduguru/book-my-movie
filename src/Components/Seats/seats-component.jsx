import { useNavigate, useSearchParams } from "react-router-dom"
import MOVIE_DATA from "../../movies-data.json"
import { Button } from "../../Components/Button/button.styles"
import Seat from "../Seat/seat.component"
import {
  BookingContainer,
  SeatContainer,
  SeatRow,
  Screen,
} from "./seats.styles"
const Seats = () => {
  const [searchparams] = useSearchParams()
  const query_id = searchparams.get("id")
  const { id, name, price, theatre } = MOVIE_DATA.filter(
    (movie) => movie.id === query_id
  )[0]

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"]
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
                const colList = <Seat num={col} />
                return colList
              })}
              <br />
            </SeatRow>
          )
          return rowList
        })}
      </SeatContainer>
      <Button>Pay ₹{price}</Button>
    </BookingContainer>
  )
}
export default Seats
