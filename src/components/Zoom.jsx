import React from "react";
import "../App.css";
import shoes1 from "../assets/images/image-product-1-thumbnail.jpg";
import shoes2 from "../assets/images/image-product-2-thumbnail.jpg";
import shoes3 from "../assets/images/image-product-3-thumbnail.jpg";
import shoes4 from "../assets/images/image-product-4-thumbnail.jpg";
import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";
export default function Zoom() {
  return (
    <div className="zoom">
      <div className="container">
        <div className="left_section1">
          <div className="big_img_left_section1 left2_section1">
            <button className="btn_goLeft">
              <img src={next} alt="" />
            </button>
            <button className="btn_goRight">
              <img src={previous} alt="" />
            </button>
            <img id="bigImg" src={shoes1} alt="shoe" />
          </div>
          <div className="small_img_left_section1">
            <img src={shoes1} alt="shoe" />
            <img src={shoes2} alt="shoe" />
            <img src={shoes3} alt="shoe" />
            <img src={shoes4} alt="shoe" />
          </div>
        </div>
      </div>
    </div>
  );
}
