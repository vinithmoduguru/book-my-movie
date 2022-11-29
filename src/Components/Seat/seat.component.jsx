import { useContext, useState } from "react"
import { BookingContext } from "../../Contexts/booking.context"
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

const Seat = ({ id, children, seatType }) => {
  const [isActive, setIsActive] = useState(false)
  const { selected, setSelected } = useContext(BookingContext)
  const curr_selected = selected
  const handleSelection = (id) => {
    setIsActive(!isActive)
    if (!isActive) {
      curr_selected.add(id)
    } else {
      curr_selected.delete(id)
    }
    setSelected(curr_selected)
  }
  const CustomSeat = getSeat(seatType)
  return (
    <CustomSeat
      onClick={() => handleSelection(id)}
      style={{ backgroundColor: isActive && "#1ea83c" }}>
      {children}
    </CustomSeat>
  )
}
export default Seat
