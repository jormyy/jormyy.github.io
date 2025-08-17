import React from 'react';
import '../assets/styles/projects.css';
import '../App.css';

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="heading">projects</h2>
    <div className="project-blocks">
      <div className="block">
        <h2>Loyal Listener</h2>
        <p>Web application that creates comprehensive Spotify playlists of an artist's complete discography.</p>
        <ul>
            <li>hi</li>
            <li>hello</li>
        </ul>
      </div>
      <div className="block">
        <h2>Quick Draw Reimplementation</h2>
        <p>Machine Learning model based on Google's Quick, Draw! game to recognize drawings.</p>
      </div>
      <div className="block">
        <h2>BIL</h2>
        <p>Speech recognition virtual assistant capable of executing numerous commands.</p>
      </div>
      <div className="block">
        <h2>Aggie Platter</h2>
        <p>Webscraping tool that tracks nutrition facts at UC Davis dining commons.</p>
      </div>
    </div>
  </section>
);

export default Projects;