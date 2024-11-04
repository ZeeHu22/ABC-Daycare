import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

// Import images
import img1 from "./assets/IMG_9245.JPG";
import img2 from "./assets/IMG_9246.JPG";
import img3 from "./assets/IMG_9247.JPG";
import img4 from "./assets/IMG_9248.JPG";
import img5 from "./assets/IMG_9249.JPG";
import img6 from "./assets/IMG_9250.JPG";
import img7 from "./assets/IMG_9253.JPG";
import img8 from "./assets/IMG_9254.JPG";
import img9 from "./assets/IMG_9255.JPG";
import img10 from "./assets/IMG_9256.JPG";
import Contact_us from "./components/Contact_us";
import Testimonials from "./components/Testimonials";

function App() {
  const openModal = () => {
    document.getElementById('modal').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
  };

  const photos = [
    { src: img1, alt: "Photo 1" },
    { src: img2, alt: "Photo 2" },
    { src: img5, alt: "Photo 5" },
    { src: img6, alt: "Photo 6" },
    { src: img7, alt: "Photo 7" },
    { src: img8, alt: "Photo 8" },
    { src: img9, alt: "Photo 9" },
    { src: img10, alt: "Photo 10" }
  ];

  return (
    <Router>
      <div className="App">
        {/* Nav will display on all routes */}
        <Nav openModal={openModal} />

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Landing openModal={openModal} />
                <Gallery photos={photos} />
                <Contact openModal={openModal} closeModal={closeModal} />
                <Contact_us openModal={openModal} />
              </>
            }
          />

          {/* About Route */}
          <Route path="/about" element={<Testimonials />} />
        </Routes>

        {/* Footer will display on all routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;