import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Nav />

      <Landing />

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Our mission is to provide quality childcare that meets the needs of
          each child and family.
        </p>
        <img src="about-us.jpg" alt="About Us" />
      </section>

      <section className="programs">
        <h2>Our Programs</h2>
        <div className="program">
          <h3>Infant Care</h3>
          <p>
            Our infant care program provides a nurturing environment for your
            baby.
          </p>
        </div>
        <div className="program">
          <h3>Toddler Program</h3>
          <p>
            Our toddler program encourages exploration and learning through
            play.
          </p>
        </div>
        <div className="program">
          <h3>Preschool</h3>
          <p>
            Our preschool program prepares children for kindergarten and beyond.
          </p>
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          <p>"This daycare has been a wonderful experience for our family!"</p>
          <cite>- Parent</cite>
        </blockquote>
      </section>

      <section className="gallery">
        <h2>Gallery</h2>
        <img src="gallery1.jpg" alt="Gallery Image 1" />
        <img src="gallery2.jpg" alt="Gallery Image 2" />
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>Address: 123 Daycare St, City, State</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@daycare.com</p>
        <form>
          <label>Name:</label>
          <input type="text" name="name" />
          <label>Email:</label>
          <input type="email" name="email" />
          <label>Message:</label>
          <textarea name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>© 2024 Our Daycare. All rights reserved.</p>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
