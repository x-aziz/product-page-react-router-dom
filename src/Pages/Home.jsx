import React, { useState } from "react";
import Description from "../components/Discription";
import Gallery from "../components/Galery.jsx";
import shoes2 from "../assets/images/image-product-2.jpg";
import shoes3 from "../assets/images/image-product-3.jpg";
import shoes4 from "../assets/images/image-product-4.jpg";
import shoes1 from "../assets/images/image-product-1.jpg";
function Home() {
  const description = [
    {
      title: "Fall Limited Edition Sneakers",
      sous_description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      source: [shoes1, shoes2, shoes3, shoes4],
      promotion: "50%",
      old_price: 250.0,
      price: 125.0,
      quantity: 1,
    },
  ];
  const handleAddToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndeximport(
        (item) => item.title === product.title
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <section className="section1">
        <Gallery
          displayZoom={() => setImgClicked(true)} // display zoom ????
          onSelectProduct={handleSelectProduct}
          description={description}
        />
        <Description onAddToCart={handleAddToCart} description={description} />
      </section>
    </div>
  );
}

export default Home;
