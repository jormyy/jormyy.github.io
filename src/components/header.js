import React, { useState, useEffect } from 'react';
import '../assets/styles/header.css';

const Header = () => {
    const [activeSection, setActiveSection] = useState('');
    const [hoveredLink, setHoveredLink] = useState('');

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

    const glitchText = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 50}ms` }}>
                {char}
            </span>
        ));
    };

    return (
        <header className="hacker-header">
            <div className="logo">
                <h1>Jeremy Ha</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li>
                        <a 
                            href="#home" 
                            className={`nav-link glitch ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={(e) => handleSmoothScroll(e, 'home')}
                            onMouseEnter={() => setHoveredLink('home')}
                            onMouseLeave={() => setHoveredLink('')}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#about-me" 
                            className={`nav-link glitch ${activeSection === 'about-me' ? 'active' : ''}`}
                            onClick={(e) => handleSmoothScroll(e, 'about-me')}
                            onMouseEnter={() => setHoveredLink('about-me')}
                            onMouseLeave={() => setHoveredLink('')}>
                            {hoveredLink === 'about-me' ? glitchText('About Me') : 'About Me'}
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#experience" 
                            className={`nav-link glitch ${activeSection === 'experience' ? 'active' : ''}`}
                            onClick={(e) => handleSmoothScroll(e, 'experience')}
                            onMouseEnter={() => setHoveredLink('experience')}
                            onMouseLeave={() => setHoveredLink('')}>
                            Experience
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#projects" 
                            className={`nav-link glitch ${activeSection === 'projects' ? 'active' : ''}`}
                            onClick={(e) => handleSmoothScroll(e, 'projects')}
                            onMouseEnter={() => setHoveredLink('projects')}
                            onMouseLeave={() => setHoveredLink('')}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#certificates" 
                            className={`nav-link glitch ${activeSection === 'certificates' ? 'active' : ''}`}
                            onClick={(e) => handleSmoothScroll(e, 'certificates')}
                            onMouseEnter={() => setHoveredLink('certificates')}
                            onMouseLeave={() => setHoveredLink('')}>
                            Certificates
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#skills" 
                            className={`nav-link glitch ${activeSection === 'skills' ? 'active' : ''}`}
                            onClick={(e) => handleSmoothScroll(e, 'skills')}
                            onMouseEnter={() => setHoveredLink('skills')}
                            onMouseLeave={() => setHoveredLink('')}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#contact-me" 
                            className={`nav-link glitch ${activeSection === 'contact-me' ? 'active' : ''}`}
                            onClick={(e) => handleSmoothScroll(e, 'contact-me')}
                            onMouseEnter={() => setHoveredLink('contact-me')}
                            onMouseLeave={() => setHoveredLink('')}>
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;