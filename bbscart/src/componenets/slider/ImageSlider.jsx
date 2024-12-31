import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/bbsimages/Banner1.jpg"
import img2 from "../../assets/bbsimages/Banner2.jpg"
import img3 from "../../assets/bbsimages/Banner3.jpg"


const ImageSlider = () => {
  const images = [img1,img2,img3];
  const [currentImage, setCurrentImage] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Image Container */}
      <div
        className="flex w-full h-full transition-transform duration-500"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-[1480px] h-[780px] object-cover"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
      >
        <FaArrowLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default ImageSlider;
