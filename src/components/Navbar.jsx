import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../App.css";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);
 const handleToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };


  return (
    <nav className="navbar">
      
      <div className="logo">WC</div>

    
      <ul className="nav-links">
        <li><a href="#about" className="active">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#community">Community</a></li>
              

      </ul>

      <button 
  className="toggle" 
 onClick={handleToggle}
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>

    </nav>
  );
}
