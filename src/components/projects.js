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
                <div className="skills-container">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Flask</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">REST API</span>
                    <span className="skill-tag">OAuth</span>
                </div>
                <a href="https://github.com/jormyy/loyal-listener" className="github-btn" target="_blank">view source</a>
            </div>
            <div className="block">
                <h2>Quick Draw Reimplementation</h2>
                <p>Machine Learning model based on Google's Quick, Draw! game to recognize drawings.</p>
                <div className="skills-container">
                    <span className="skill-tag">Machine Learning</span>
                    <span className="skill-tag">Tensorflow</span>
                    <span className="skill-tag">REST API</span>
                    <span className="skill-tag">Neural Network</span>
                    <span className="skill-tag">Git</span>
                </div>
                <a href="https://github.com/jormyy/ecs171" className="github-btn" target="_blank">view source</a>
            </div>
            <div className="block">
                <h2>BIL</h2>
                <p>Speech recognition virtual assistant capable of executing numerous commands.</p>
                <div className="skills-container">
                    <span className="skill-tag">Speech Recognition</span>
                    <span className="skill-tag">AI</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">I/O Handling</span>
                    <span className="skill-tag">Automation</span>
                </div>
                <a href="https://github.com/jormyy/BIL" className="github-btn" target="_blank">view source</a>
            </div>
            <div className="block">
                <h2>Aggie Platter</h2>
                <p>Webscraping tool that tracks nutrition facts at UC Davis dining commons.</p>
                <div className="skills-container">
                    <span className="skill-tag">Webscraping</span>
                    <span className="skill-tag">BeautifulSoup</span>
                    <span className="skill-tag">Requests</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Data Processing</span>
                </div>
                <a href="https://github.com/jormyy/aggie-platter" className="github-btn" target="_blank">view source</a>
            </div>
        </div>
    </section>
);

export default Projects;