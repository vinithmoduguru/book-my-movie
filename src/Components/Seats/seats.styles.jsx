import styled from "styled-components"

export const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  perspective: 1000px;
  margin-bottom: 20px;
  margin-top: 20px;
`

export const SeatContainer = styled.div`
  position: relative;
  height: 80%;
  box-sizing: border-box;
  padding: 1em;
  width: 80%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  flex-direction: column-reverse;
`

export const SeatRow = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export const Screen = styled.div`
  background-color: grey;
  height: 120px;
  width: 50%;
  margin: 15px 0;
  transform: rotateX(-45deg);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 11%), 0 2px 4px 0 rgb(0 0 0 / 14%);
`
