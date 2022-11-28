import { useSearchParams } from "react-router-dom"
import { Button } from "../Button/button.styles"
import MOVIE_DATA from "../../movies-data.json"
import Seat from "../Seat/seat.component"
import { SEAT_TYPE_CLASSES } from "../Seat/seat.component"
import {
  CustomiseContainer,
  SeatContainer,
  SeatRow,
  SeatSetters,
} from "./customise-seat.styles"
import { useContext, useEffect, useState } from "react"
import { BookingContext } from "../../Contexts/booking.context"

const CustomiseSeat = () => {
  const [searchparams] = useSearchParams()
  const query_id = searchparams.get("id")
  const movie = MOVIE_DATA.filter((movie) => movie.id === query_id)[0]
  const { id, name, price, theatre } = movie

  const { rowsize, setRowsize, setColumnsize, columnsize, rows, columns } =
    useContext(BookingContext)

  return (
    <CustomiseContainer>
      <h1>
        {name}({theatre}
      </h1>
      <SeatSetters>
        {/* <label for="rows">Row</label> */}
        <input
          type="number"
          name="rows"
          id="rows"
          value={rowsize}
          onChange={(e) => setRowsize(e.target.value)}
        />
        {/* <label for="columns">Column</label> */}
        <input
          type="number"
          name="columns"
          id="columns"
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
    </CustomiseContainer>
  )
}
export default CustomiseSeat
