import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './styles/Nav.css'; // Import the CSS for styling

export default function Nav({ openModal, closeModal }) {
  return (
    <div>
      <header className="header">
        <h1>ABC Daycare</h1>
      </header>
      <nav className="nav-sidebar">
        <ul>
          {/* Home Link */}
          <li>
            <Link to="/">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
          </li>

          {/* About Link */}
          <li>
            <Link to="/about">
              <i className="fas fa-info-circle"></i>
              <span>About</span>
            </Link>
          </li>

          {/* Contact Link */}
          <li>
            <a onClick={openModal} href="#">
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
