import React from 'react';
import '../assets/styles/projects.css';
import '../App.css';

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="projects-heading">Projects</h2>
    <div className="projects-container">
      <div className="project-block">
        <h3 className="project-title">Project 1</h3>
        <p className="project-description">Description for Project 1.</p>
      </div>
      <div className="project-block">
        <h3 className="project-title">Project 2</h3>
        <p className="project-description">Description for Project 2.</p>
      </div>
      <div className="project-block">
        <h3 className="project-title">Project 3</h3>
        <p className="project-description">Description for Project 3.</p>
      </div>
      <div className="project-block">
        <h3 className="project-title">Project 4</h3>
        <p className="project-description">Description for Project 4.</p>
      </div>
    </div>
  </section>
);

export default Projects;