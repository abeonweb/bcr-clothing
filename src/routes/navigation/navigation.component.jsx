import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";


const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <img src={Logo} alt="BCR logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}
          <CartIcon />
        </div>
          <CartDropdown />
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
