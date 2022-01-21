import React, { useState } from "react";
import "../../css/navbar.css";
import FontAwesome from "react-fontawesome"

import { NavLink } from "react-router-dom";
// import { image } from '../../imgs/RCUCoEsLogo.png';
import ROTLOGO from "../../background/rotl.png";

const Navbar = (flag) => {

  const fl = flag.flags
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const className = (flag) => {

    if (flag == 1){
      return "main-nav-homepage"
    }
    return "main-nav"
  }
  return (
      
        <nav className={className(fl)}>
        
        {/* 1st logo part  */}
        <div className="logo">
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
              <NavLink to="/member">Members</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">

          {/*  hamburger Menu menu   */}
          <div className="hamburger-menu">
            <a  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <FontAwesome className="fas fa-bars fa-sm"/>
              {/* <FontAwesome className="fas fa-times fa-lg"/> */}
            </a>
          </div>
        </div>
      </nav> 
    
  );
};

export default Navbar;