import React from 'react';
import '../assets/styles/header.css';
import '../App.css';

const Header = () => (
  <header className="apple-style-header">
    <div className="logo">
      <h1>Jeremy Ha</h1>
    </div>
    <nav>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact-me">Contact Me</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;