import React, { useState, useEffect } from 'react';
import '../assets/styles/header.css';
import '../App.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about-me', 'experience', 'projects', 'certificates', 'skills', 'contact-me'];
      let currentSection = '';
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="apple-style-header">
      <div className="logo">
        <h1>Jeremy Ha</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          </li>
          <li>
            <a href="#about-me" className={activeSection === 'about-me' ? 'active' : ''}>About Me</a>
          </li>
          <li>
            <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
          </li>
          <li>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          </li>
          <li>
            <a href="#certificates" className={activeSection === 'certificates' ? 'active' : ''}>Certificates</a>
          </li>
          <li>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          </li>
          <li>
            <a href="#contact-me" className={activeSection === 'contact-me' ? 'active' : ''}>Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
