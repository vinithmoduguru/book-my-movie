import { useSearchParams } from "react-router-dom"
import { Button } from "../Button/button.styles"
import MOVIE_DATA from "../../movies-data.json"
import Seat from "../Seat/seat.component"
import {
  CustomiseContainer,
  SeatContainer,
  SeatRow,
  SeatSetters,
} from "./customise-seat.styles"
import { useState } from "react"

const CustomiseSeat = () => {
  const [searchparams] = useSearchParams()
  const query_id = searchparams.get("id")
  const { id, name, price, theatre } = MOVIE_DATA.filter(
    (movie) => movie.id === query_id
  )[0]
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"]
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [rowsize, setRowsize] = useState("20")
  const [columnsize, setColumnsize] = useState("6")
  return (
    <CustomiseContainer>
      <h1>
        {name}({theatre}
      </h1>
      <SeatSetters>
        <input
          type="number"
          name="rows"
          value={rowsize}
          onChange={(e) => setRowsize(e.target.value)}
        />
        <input
          type="number"
          name="columns"
          value={columnsize}
          onChange={(e) => setColumnsize(e.target.value)}
        />
        <Button>Save Setup</Button>
      </SeatSetters>
      <h2>
        Select Seats to be <span>Blocked</span>
      </h2>
      <SeatContainer>
        {rows.map((row) => {
          const rowList = (
            <SeatRow>
              <span>{row}</span>
              {columns.map((col) => {
                const colList = <Seat className="block" num={col} />
                return colList
              })}
              <br />
            </SeatRow>
          )
          return rowList
        })}
      </SeatContainer>
    </CustomiseContainer>
  )
}
export default CustomiseSeat
