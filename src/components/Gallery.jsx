import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Gallery.css"; // Optional: For additional custom styles

const Gallery = ({ photos = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const openModal = (index) => {
    setCurrentPhoto(photos[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false, // Disable auto scroll
    arrows: true,
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
          <div key={index} className="slide" onClick={() => openModal(index)}>
            <img src={photo.src} alt={photo.alt} className="slide-image" />
          </div>
        ))}
      </Slider>

      {isModalOpen && (
        <div className="gallery-modal">
          <button className="close-button-gallery" onClick={closeModal}>
            &times;
          </button>
          {currentPhoto && (
            <div className="gallery-modal-content">
              <img src={currentPhoto.src} alt={currentPhoto.alt} className="modal-image" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
