import React from "react";
import "../App.css";
import TrollyGray from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount, handleShowCart }) {
  return (
    <nav>
      <div className="nav_left">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <Link to={"home"}>Home</Link>
        <Link to="Men">Men</Link>
        <Link to="Women">Women</Link>
        <Link to="about">About</Link>
        <a href="#">Contact</a>
      </div>
      <div className="nav_right">
        {cartCount > 0 && <span className="notification">{cartCount}</span>}
        <img
          className="nav_img1_right"
          id="shop"
          src={TrollyGray}
          alt="cart"
          onClick={handleShowCart}
          style={{ cursor: "pointer" }}
        />
        <img className="nav_img2_right" src={avatar} alt="avatar" />
      </div>
    </nav>
  );
}
