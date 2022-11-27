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
import { useEffect, useState } from "react"

const CustomiseSeat = () => {
  const [searchparams] = useSearchParams()
  const query_id = searchparams.get("id")
  const { id, name, price, theatre } = MOVIE_DATA.filter(
    (movie) => movie.id === query_id
  )[0]
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
  const [rowsize, setRowsize] = useState(6)
  const [columnsize, setColumnsize] = useState(20)
  const [columns, setColumns] = useState([])
  const [rows, setRows] = useState([])

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
                  <Seat seatType={SEAT_TYPE_CLASSES.base}>{col}</Seat>
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
