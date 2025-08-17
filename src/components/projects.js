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
        <div class="skills-container">
          <span class="skill-tag">React</span>
          <span class="skill-tag">Flask</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">REST API</span>
          <span class="skill-tag">OAuth</span>
        </div>
        <a href="https://github.com/jormyy/loyal-listener" class="github-btn">view source</a>
      </div>
      <div className="block">
        <h2>Quick Draw Reimplementation</h2>
        <p>Machine Learning model based on Google's Quick, Draw! game to recognize drawings.</p>
        <div class="skills-container">
          <span class="skill-tag">Machine Learning</span>
          <span class="skill-tag">Tensorflow</span>
          <span class="skill-tag">REST API</span>
          <span class="skill-tag">Neural Network</span>
          <span class="skill-tag">Git</span>
        </div>
        <a href="https://github.com/jormyy/ecs171" class="github-btn">view source</a>
      </div>
      <div className="block">
        <h2>BIL</h2>
        <p>Speech recognition virtual assistant capable of executing numerous commands.</p>
        <div class="skills-container">
          <span class="skill-tag">Speech Recognition</span>
          <span class="skill-tag">AI</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">I/O Handling</span>
          <span class="skill-tag">Automation</span>
        </div>
        <a href="https://github.com/jormyy/BIL" class="github-btn">view source</a>
      </div>
      <div className="block">
        <h2>Aggie Platter</h2>
        <p>Webscraping tool that tracks nutrition facts at UC Davis dining commons.</p>
        <div class="skills-container">
          <span class="skill-tag">Webscraping</span>
          <span class="skill-tag">BeautifulSoup</span>
          <span class="skill-tag">Requests</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">Data Processing</span>
        </div>
        <a href="https://github.com/jormyy/aggie-platter" class="github-btn">view source</a>
      </div>
    </div>
  </section>
);

export default Projects;