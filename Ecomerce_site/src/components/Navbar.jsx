import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <header>
      <NavLink to="/">
        <img src="../logo.png" alt="logo" className="logo" />
      </NavLink>
      <div className="ele">
        <NavLink to="/" className="e">
          <p>Home</p>
        </NavLink>

        <NavLink to={"/Cart"} className="e">
          <div className="ty">
            {<FaShoppingCart className="Cart-logo" />}
            <span className="count">{cart.length}</span>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
