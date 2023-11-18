
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home2.css'; // Import the CSS file
import user1 from './user.png'

import profile from './profile.png'
import setting from './setting.png'
import help from './help.png'
import logout from './logout.png'

export default function PlanetWatch() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div>
      <header className="header">
        <img src="logo.png" className="logo" alt="Planet Watch Logo" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/connect">connect</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Contact</Link></li>
          </ul>
        </nav>
        <img src={user1} className="user-pic" onClick={toggleMenu} alt="User Picture" />
      </header>

      <div className="hero">
        <h1>Welcome</h1>
        <p>"The best way to predict the future is to create it." - Peter Drucker</p>
      </div>

      <div className={`sub-menu-wrap ${isSubMenuOpen ? 'open-menu' : ''}`} id="submenu">
        <div className="sub-menu">
          <div className="user-info">
            <img src={user1} alt="User Picture" />
            <h2>Sidharth</h2>
          </div>
          <hr />
          <a href="#" className="sub-menu-link">
            <img src={profile} alt="Profile Picture" />
            <p>Edit Profile</p>
            <span>&gt;</span>
          </a>
          <a href="#" className="sub-menu-link">
            <img src={setting} alt="Settings Picture" />
            <p>Settings</p>
            <span>&gt;</span>
          </a>
          <a href="#" className="sub-menu-link">
            <img src={help} alt="Help Picture" />
            <p>Help and Support</p>
            <span>&gt;</span>
          </a>
          <a href="#" className="sub-menu-link">
            <img src={logout} alt="Logout Picture" />
            <p>Logout</p>
            <span>&gt;</span>
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>Thank you for visiting :)</p>
      </footer>
    </div>
  );
}
