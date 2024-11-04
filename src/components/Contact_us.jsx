import React from "react";
import portraitImage from "../assets/IMG_9245.JPG"; // Import the image

export default function Contact_us({ openModal }) {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-us-container">
        <div className="contact-us-portrait">
          <img src={portraitImage} alt="Contact Portrait" /> {/* Use the imported image */}
        </div>
        <div className="contact-us-info">
          <p>
            <b>Address:</b> 13713 Vanderbilt Way, Laurel, MD 20707
          </p>
          <p>
            <b>Phone:</b> (240) 485-7792
          </p>
          <p>
            <b>Email:</b> fouziahussain94@yahoo.com
          </p>
        </div>
      </div>
      <button onClick={openModal}>Schedule a Tour</button>
    </section>
  );
}
