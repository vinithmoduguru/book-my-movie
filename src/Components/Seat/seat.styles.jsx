import styled from "styled-components"

export const BaseSeat = styled.div`
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

export const SelectedSeat = styled.div`
  height: 30px;
  width: 30px;
  margin: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  background-color: #1ea83c;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 11%), 0 2px 4px 0 rgb(0 0 0 / 14%);

  &:hover {
    transform: scale(1.2);
  }
`

export const BookedSeat = styled.div`
  height: 30px;
  width: 30px;
  margin: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  background-color: rgba(138, 138, 138, 0.418);
  align-items: center;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 11%), 0 2px 4px 0 rgb(0 0 0 / 14%);
`

export const BlockedSeat = styled.div`
  visibility: hidden;
  height: 30px;
  width: 30px;
  margin: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 11%), 0 2px 4px 0 rgb(0 0 0 / 14%);
`
