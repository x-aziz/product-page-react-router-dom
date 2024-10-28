import React from "react";
import "../App.css";
import Delete from "../assets/images/icon-delete.svg";

export default function Cart({ showCart, cartItems, handleDelete }) {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  const emptyCart = {
    marginTop: "17%",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Kumbh Sans sans-serif",
  };
  return (
    <div className={`cart ${showCart ? "show" : ""}`}>
      <div className="up_cart">
        <p>Cart</p>
      </div>
      {cartItems.length === 0 ? (
        <p style={emptyCart}>YOUR CART IS EMPTY</p>
      ) : (
        <div className="secondPart">
          {cartItems.map((item, index) => (
            <div className="medium_cart" key={index}>
              <div>
                <img className="img1_medium" src={item.source[0]} alt="shoe" />
              </div>
              <div>
                <p>
                  {item.title} ${item.price} x {item.quantity}{" "}
                  <b>${item.price * item.quantity}</b>
                </p>
              </div>
              <div>
                <img
                  className="img2_medium"
                  src={Delete}
                  alt="delete"
                  onClick={() => {
                    const newCartItems = cartItems.filter(
                      (_, i) => i !== index
                    );
                    handleDelete(newCartItems);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          ))}
          <div className="down_cart">
            <button className="btn4">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
