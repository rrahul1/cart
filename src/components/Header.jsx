import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import { useState } from "react";

function Header() {
  const { items } = useSelector((state) => state.cart);
  const [phoneMenu, setPhoneMenu] = useState(false);

  const handlePhoneMenu = (e) => {
    e.preventDefault();
    setPhoneMenu(!phoneMenu);
  };

  return (
    <div className="header">
      <div className="menu">
        <img src={menu} onClick={handlePhoneMenu} alt="menu" />
      </div>
      <div className="cartlink">
        <Link to="/">Products</Link>
        <Link to="/cart">
          Cart <span>{items.length > 0 ? items.length : "0"}</span>
        </Link>
      </div>
      {phoneMenu && (
        <div className="phoneLink">
          <Link to="/">Products</Link>
          <Link to="/cart">
            Cart <span>{items.length > 0 ? items.length : "0"}</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
