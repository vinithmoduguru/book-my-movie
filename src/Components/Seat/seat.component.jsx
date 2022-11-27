import { useState } from "react"
import { SeatContainer } from "./seat.styles"

const Seat = ({ children, ...otherProps }) => {
  const [isActive, setActive] = useState(false)
  const toggleSelect = () => {
    setActive(!isActive)
  }
  return (
    <SeatContainer
      style={{ backgroundColor: isActive ? "#1ea83c" : "white" }}
      onClick={toggleSelect}>
      {children}
    </SeatContainer>
  )
}
export default Seat
