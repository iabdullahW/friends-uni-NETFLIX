// carousel.jsx
import React from "react";
import Slider from "react-slick";
import alyanPic from '../assets/alyan-pic.jpg';
import hammadImage from '../assets/hammad-pic.jpg'; 
import sorathImage from '../assets/sorath-pic.jpg'; 
import areeshaImage from '../assets/areesha-pic.jpg';
import zainImage from '../assets/zain-pic.jpg';
import samreenImage from '../assets/samreen-pic.jpg';
import tenarImage from '../assets/tenar-pic.jpg';
import abdImage from '../assets/abd-pic.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const images = [alyanPic, hammadImage, sorathImage, areeshaImage,zainImage,samreenImage,tenarImage,abdImage];

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img src={image} alt={`Slide ${index + 1}`} className="h-[18rem] w-[13rem] object-cover flex items-center" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
