import styled from "styled-components"

export const CustomiseContainer = styled.div`
  /* font-size: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  perspective: 1000px;
  margin-bottom: 30px;
`

export const SeatSetters = styled.div`
  display: flex;
`
export const SeatContainer = styled.div``

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
