import { NavLink, Outlet } from "react-router-dom"
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
} from "./navigation.styles"

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg"

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  )
}
export default Navigation
