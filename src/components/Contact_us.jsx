import React from "react";

export default function Contact_us({ openModal }) {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <p>
        <b>Address:</b> 13713 Vanderbilt Way, Laurel, MD 20707
      </p>
      <p>
        <b>Phone:</b> (240) 485-7792
      </p>
      <p>
        <b>Email:</b> fouziahussain94@yahoo.com
      </p>
      <button onClick={openModal}>Schedule a Tour</button>
    </section>
  );
}
