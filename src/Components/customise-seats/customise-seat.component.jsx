import { useSearchParams } from "react-router-dom"
import { Button } from "../Button/button.styles"
import Seat from "../Seat/seat.component"
import { SEAT_TYPE_CLASSES } from "../Seat/seat.component"
import {
  CustomiseContainer,
  SeatContainer,
  SeatRow,
  SeatSetters,
} from "./customise-seat.styles"
import { useContext, useEffect, useState } from "react"
import { BookingContext, selected } from "../../Contexts/booking.context"

const CustomiseSeat = () => {
  const [searchparams] = useSearchParams()
  const query_id = searchparams.get("id")
  const {
    rowsize,
    setRowsize,
    setColumnsize,
    columnsize,
    rows,
    selected,
    columns,
    movieMap,
    setMovieMap,
  } = useContext(BookingContext)
  const movie = movieMap.filter((movie) => movie.id === query_id)[0]
  const {
    seat: { blocked },
  } = movie

  const submitHandler = () => {
    const newMovieMap = movieMap.map((mv) =>
      mv.id === movie.id
        ? {
            ...mv,
            rowsize: rowsize,
            columnsize: columnsize,
            seat: { blocked: selected },
          }
        : mv
    )
    setMovieMap(newMovieMap)
    alert("Selected seats has been blocked")
  }

  return (
    <CustomiseContainer>
      <h1>
        {movie.name}({movie.theatre})
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
        <Button onClick={submitHandler}>Save Setup</Button>
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
                const id = `${row}:${col}`
                const seatType =
                  blocked.size > 0 && blocked.has(id)
                    ? SEAT_TYPE_CLASSES.selected
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
    </CustomiseContainer>
  )
}
export default CustomiseSeat
