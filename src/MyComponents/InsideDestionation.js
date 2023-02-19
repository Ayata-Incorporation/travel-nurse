import React, { useEffect, useState } from "react";
import "./style.css";

const images = [
    "img/image1.jpg",
    "img/image2.jfif",
    "img/image3.jpg",
    "img/image4.jfif",
    "img/image5.jpg",
    "img/image1.jpg",
    "img/image3.jpg",
    "img/img1.png",
    "img/img3.png"

];

const InsideDestination = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showslide,setshowslide] = useState("4")

  const handleNext = () => {
    if (currentSlide === images.length - showslide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  useEffect(() => {
    function handleResize() {
      if(window.innerWidth > 1024){
        setshowslide(4);
      }
     else if (window.innerWidth < 1024) {
        setshowslide(3);
      }
      else if(window.innerWidth < 768) {
        setshowslide(2);
      }else{
        setshowslide(1);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="InsideContainer">
      <div className="InsideContainerImageContainer">
        {images.slice(currentSlide, currentSlide + showslide).map((img, index) => (
          <div className="InsideContainerImage" key={index}>
            <img src={img} alt={`img-${index}`} />
            <p><i class="fa-solid fa-square-plus"></i>Travell nurse </p>
            <h5><i class="fa-solid fa-location-dot"></i>America </h5>
          </div>
        ))}
        <button className="InsideContainerImageNext" onClick={handleNext}>
      <i class="fa-solid fa-angle-right"></i>
      </button>
      </div>
      
    </div>
  );
};

export default InsideDestination;

