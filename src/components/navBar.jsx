import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  let { spanItems } = props;

  return (
    <div>
      <div className="navBar">
        <div className="navLogo">
          <Link to="/">fk-usama</Link>
        </div>
        <div className="cartIcon">
          <Link to="/cart">
            <img className="cartIconImg" src="./cart.svg" alt="cartIcon" />
          </Link>
          <span>{spanItems}</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
