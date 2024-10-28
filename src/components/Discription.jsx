import React, { useState } from "react";
import TrollyWhite from "../assets/images/icon-cart2.svg";
import "../App.css";

export default function Description({ onAddToCart, description }) {
  const [operation, setOperation] = useState(1);

  return (
    <div className="right_section1">
      <p className="p1_right_section1">Sneaker Company</p>
      <h1>{description[0].title}</h1>
      <p className="p2_right_section1">{description[0].sous_description}</p>
      <div className="price">
        <h2 className="p1_price">${description[0].price}</h2>
        <p className="p2_price">{description[0].promotion}</p>
        <p className="p3_price">${description[0].old_price}.00</p>
      </div>
      <div className="part_button">
        <div className="quantity">
          <button
            className="btn1"
            onClick={() => {
              setOperation(operation > 1 ? operation - 1 : 1);
            }}
          >
            -
          </button>
          <input className="input1" type="number" value={operation} readOnly />
          <button
            className="btn2"
            onClick={() => {
              setOperation(operation + 1);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="btn4"
            onClick={() => onAddToCart(description[0], operation)}
          >
            <img src={TrollyWhite} alt="cart" />
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}
