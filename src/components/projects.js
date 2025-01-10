import React from 'react';
import '../assets/styles/projects.css';
import '../App.css';

const Projects = () => (
  <section id="projects" className="projects-section section">
    <h2 className="heading">projects</h2>
    <div className="block">
      <h2>Quick Draw Reimplementation</h2>
      <p>ML model to recognize drawings.</p>
    </div>
    <div className="block">
      <h2>Loyal Listener</h2>
      <p>Spotify playlist generator.</p>
    </div>
    <div className="block">
      <h2>BIL</h2>
      <p>Speech recognition virtual assistant.</p>
    </div>
    <div className="block">
      <h2>Aggie Platter</h2>
      <p>Dining hall nutrition tracker.</p>
    </div>
  </section>
);

export default Projects;