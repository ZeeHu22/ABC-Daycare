import React from 'react';
import './styles/Nav.css'; // Import the CSS for styling

export default function Nav() {
  return (
    <div>
      <header className="header">
        <h1>ABC Daycare</h1>
      </header>
      <nav className="nav-sidebar">
        <ul>
          {/* Home Link */}
          <li>
            <a href="#">
              <i className="fas fa-home"></i> {/* Font Awesome Icon */}
              <span>Home</span> {/* Text Label */}
            </a>
          </li>

          {/* About Link */}
          <li>
            <a href="#">
              <i className="fas fa-info-circle"></i>
              <span>About</span>
            </a>
          </li>

          {/* Contact Link */}
          <li>
            <a href="#">
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
