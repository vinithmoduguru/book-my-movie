import styled from "styled-components"

export const SeatContainer = styled.div`
  height: 30px;
  width: 30px;
  margin: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 11%), 0 2px 4px 0 rgb(0 0 0 / 14%);

  &:hover {
    transform: scale(1.2);
  }
`
