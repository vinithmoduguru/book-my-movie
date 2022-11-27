import { useState } from "react"
import { BaseSeat, BlockedSeat, BookedSeat, SelectedSeat } from "./seat.styles"

export const SEAT_TYPE_CLASSES = {
  base: "base",
  selected: "selected",
  booked: "booked",
  blocked: "blocked",
}

const getSeat = (seatType = SEAT_TYPE_CLASSES.base) =>
  ({
    [SEAT_TYPE_CLASSES.base]: BaseSeat,
    [SEAT_TYPE_CLASSES.selected]: SelectedSeat,
    [SEAT_TYPE_CLASSES.booked]: BookedSeat,
    [SEAT_TYPE_CLASSES.blocked]: BlockedSeat,
  }[seatType])

const Seat = ({ children, seatType, ...otherProps }) => {
  const CustomSeat = getSeat(seatType)
  return <CustomSeat {...otherProps}>{children}</CustomSeat>
}
export default Seat
