import React from 'react';
import Header from './components/header';
import Home from './components/home'
import AboutMe from './components/aboutme';
import Experience from './components/experience';
import Projects from './components/projects';
import Certificates from './components/certificates';
import Skills from './components/skills';
import ContactMe from './components/contactme';
import Footer from './components/footer';
import './assets/styles/global.css';

const App = () => (
  <div>
    <Header />
    <main>
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Certificates />
      <Skills />
      <ContactMe />
    </main>
    <Footer />
  </div>
);

export default App;