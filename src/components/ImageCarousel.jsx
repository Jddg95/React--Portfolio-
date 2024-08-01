import React, { useState } from "react";
import "./ImageCarousel.css"; // Import your CSS file

const images = [
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  "//www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg",
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
]; // Replace with your image paths

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={handlePrevClick}>
        &#9664;
      </button>
      <div className="carousel-images">
        <img
          src={images[(currentIndex - 1 + images.length) % images.length]}
          alt="Previous"
          className="carousel-image small"
        />
        <img
          src={images[currentIndex]}
          alt="Current"
          className="carousel-image large"
        />
        <img
          src={images[(currentIndex + 1) % images.length]}
          alt="Next"
          className="carousel-image small"
        />
      </div>
      <button className="carousel-button right" onClick={handleNextClick}>
        &#9654;
      </button>
    </div>
  );
}

export default ImageCarousel;