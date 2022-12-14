import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-right: 100px;
  border-bottom: 1px solid #ddd;
  background-color: #222930;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  margin-right: 30px;
  justify-content: flex-end;
  place-items: center;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
