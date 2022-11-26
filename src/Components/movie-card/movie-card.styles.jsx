import styled from "styled-components"

export const MovieCardContainer = styled.div`
  background: #fff;
  padding: 10px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  height: 125px;
  width: 250px;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  margin: 20px 10px 0;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 11%), 0 6px 20px 0 rgb(0 0 0 / 14%);

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
`
