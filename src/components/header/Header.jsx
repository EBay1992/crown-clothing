import React from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utility";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav__items">
          <li className="nav__item">
            <Link className="nav__link" to="/shop">
              Shop
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/contact">
              Contant
            </Link>
          </li>
          {currentUser ? (
            <li className="nav__item">
              <Link className="nav__link" to="/" onClick={() => auth.signOut()}>
                Sign Out
              </Link>
            </li>
          ) : (
            <li className="nav__item">
              <Link className="nav__link" to="/signin">
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
