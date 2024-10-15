import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const openModal = () => {
    document.getElementById('modal').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
  };

  return (
    <Router>
      <div className="App">
        <Nav openModal={openModal} closeModal={closeModal} />

        <Landing openModal={openModal} closeModal={closeModal} />

        <Contact openModal={openModal} closeModal={closeModal} />

        

        <section className="contact-us">
          <h2>Contact Us</h2>
          <p><b>Address:</b> 13713 Vanderbilt Way, Laurel, MD 20707</p>
          <p><b>Phone:</b> (240) 485-7792</p>
          <p><b>Email:</b> fouziahussain94@yahoo.com</p>
          <button onClick={openModal}>Schedule a Tour</button>
        </section>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
