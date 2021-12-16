import React, { useState } from "react";
import "../../css/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
// import { image } from '../../imgs/RCUCoEsLogo.png';
import ROTLOGO from "../../imgs/RCUCoEsLogo.png";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
         <nav className="main-nav">
        
        {/* 1st logo part  */}
        <div className="leader_rotLogo">
            <img className="leader_rotLogo-image" src={ROTLOGO} />
          </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/announcement">Announcement</NavLink>
            </li>
            <li>
              <NavLink to="/event">Events</NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard">Leaderboard</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact us</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">

          {/*  hamburger Menu menu   */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>    
  );
};

export default Navbar;