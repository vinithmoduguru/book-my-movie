import { useContext, useEffect, useState } from "react"
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
  const { selected, setSelected, setBookingTotal } = useContext(BookingContext)
  const curr_selected = selected
  const handleSelection = (id, seatType) => {
    if (seatType !== "booked") {
      setIsActive(!isActive)
      if (!isActive) {
        curr_selected.add(id)
      } else {
        curr_selected.delete(id)
      }
      setSelected(curr_selected)
    }
  }
  useEffect(() => {
    const newTotal = selected.size * 200
    setBookingTotal(newTotal)
  }, [curr_selected, selected.size])

  const CustomSeat = getSeat(seatType)
  return (
    <CustomSeat
      onClick={() => handleSelection(id, seatType)}
      style={{
        backgroundColor: isActive && seatType !== "booked" && "#1ea83c",
      }}>
      {children}
    </CustomSeat>
  )
}
export default Seat
