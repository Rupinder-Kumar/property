import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FullWidthSlider.css'; // You can define your own styles here
import SearchComponent from "./SearchComponent";
const FullWidthSlider = () => {
	
	
	
	
	
	
	
	
	
	
  const [inputValues, setInputValues] = useState(["", ""]); // Initial values for inputs

  const handleInputChange = (index, event) => {
    const values = [...inputValues];
    values[index] = event.target.value;
    setInputValues(values);
  };


 const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="full-width-slider">
      <Slider {...settings}>
  
      
        <div>
          <img src="https://wallpapercave.com/wp/wp4110657.jpg" alt="slide1" />
          <div className="SearchComponent">
            
        <SearchComponent />

          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default FullWidthSlider;
