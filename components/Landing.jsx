import React from "react";
import './styles/Landing.css'

export default function Landing({ openModal, closeModal }) {
  return (
    <div id="Landing">
      <header className="container">
        <h1 className="title">Welcome to Our Daycare</h1>
        <p className="para">Providing a safe and nurturing environment for your child.</p>
        <button onClick={openModal}>Schedule a Tour</button>
      </header>
    </div>
  );
}
