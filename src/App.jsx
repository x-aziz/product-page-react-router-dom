import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Zoom from "./components/Zoom.jsx";
import Cart from "./components/Cart.jsx";
import { Outlet } from "react-router-dom";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [imgClicked, setImgClicked] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="body1">
      <div className="big_container">
        <Navbar cartCount={cartItems.length} handleShowCart={handleShowCart} />
        <Cart
          showCart={showCart}
          cartItems={cartItems}
          handleDelete={(newCartItems) => setCartItems(newCartItems)}
        />
        <Outlet />
      </div>
      <Zoom displayZoom={imgClicked} />
    </div>
  );
}

export default App;
