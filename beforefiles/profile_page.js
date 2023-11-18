import React, { useState } from 'react';
import './progile_page_css.css'

export default function ProfilePage(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hero">
      <nav>
        <img src="logo.png" className="logo" alt="Logo" />
        <span id="title">PLANET WATCH</span>
        <ul>
          <a href="/"><li>Home</li></a>
          <a href="/"><li>Connect</li></a>
          <a href="about_us_page.html"><li>About</li></a>
          <a href="/"><li>Contact</li></a>
        </ul>
        <img
          src="user.png"
          className="user-pic"
          alt="User"
          onClick={toggleMenu}
        />
        <div className={`sub-menu-wrap ${isMenuOpen ? "open-menu" : ""}`} id="submenu">
          <div className="submenu">
            <div className="user-info">
              <img src="user.png" alt="User" />
              <h2>Sidharth</h2>
            </div>
            <hr />
            <a href="/" className="sub-menu-link">
              <img src="profile.png" alt="Profile" />
              <p>edit profile</p>
              <span>-</span>
            </a>
            <a href="/" className="sub-menu-link">
              <img src="setting.png" alt="Settings" />
              <p>settings</p>
              <span>-</span>
            </a>
            <a href="/" className="sub-menu-link">
              <img src="help.png" alt="Help" />
              <p>help and support</p>
              <span>-</span>
            </a>
            <a href="/" className="sub-menu-link">
              <img src="logout.png" alt="Logout" />
              <p>logout</p>
              <span>-</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
