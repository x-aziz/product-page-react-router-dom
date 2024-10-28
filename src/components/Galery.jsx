import { useState } from "react";
import "../App.css";
export default function Galery({ onSelectProduct, description,displayZoom}) {
  const [selectedImg, setSelectedImg] = useState(description[0].source[0]);
  const handleSelectImg = (img) => {
    setSelectedImg(img);
    onSelectProduct(img);
  };
  return (
    <div className="left_section1">
      <div className="big_img_left_section1">
        <img id="mainImg" src={selectedImg} alt="shoe"  onClick={displayZoom}/>
      </div>
      <div className="small_img_left_section1">
        {description[0].source.map((imgSrc, index) => (
          <img
            id={`shoe${index + 1}`}
            key={index}
            onClick={() => handleSelectImg(imgSrc)}
            src={imgSrc}
            alt={`shoe ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

