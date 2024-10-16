import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Gallery.css"; // Optional: For additional custom styles

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    &#9654; {/* Right arrow symbol */}
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    &#9664; {/* Left arrow symbol */}
  </div>
);

const Gallery = ({ photos = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default to 4 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="gallery-container">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="slide">
            <img src={photo.src} alt={photo.alt} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
