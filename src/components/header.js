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
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="apple-style-header">
      <div className="logo">
        <h1>Jeremy Ha</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => handleSmoothScroll(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about-me" 
              className={activeSection === 'about-me' ? 'active' : ''}
              onClick={(e) => handleSmoothScroll(e, 'about-me')}
            >
              About Me
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={(e) => handleSmoothScroll(e, 'experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => handleSmoothScroll(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#certificates" 
              className={activeSection === 'certificates' ? 'active' : ''}
              onClick={(e) => handleSmoothScroll(e, 'certificates')}
            >
              Certificates
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={(e) => handleSmoothScroll(e, 'skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#contact-me" 
              className={activeSection === 'contact-me' ? 'active' : ''}
              onClick={(e) => handleSmoothScroll(e, 'contact-me')}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;