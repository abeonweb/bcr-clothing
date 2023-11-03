import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import logo from "../../assets/logo.png";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartOpen } from "../../store/cart/cart.selector";
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
  Logo,
} from "./navigation.styles";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser); //selects the part of state from the store. updates whenever state changes
  const isCartOpen = useSelector(selectCartOpen); 

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <Logo src={logo} alt="BCR logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={()=>dispatch(signOutStart())}>
              Sign out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign in</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
