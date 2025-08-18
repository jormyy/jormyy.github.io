import React from 'react';
import '../assets/styles/projects.css';
import '../App.css';

const Projects = () => {
    const projects = [
        {
            name: "loyal listener",
            desc: "Web application that creates comprehensive Spotify playlists of an artist's complete discography.",
            skills: ["react", "flask", "python", "rest api", "oauth"],
            link: "https://github.com/jormyy/loyal-listener"
        },
        {
            name: "quick draw reimplementation",
            desc: "Machine Learning model based on Google's Quick, Draw! game to recognize drawings.",
            skills: ["machine learning", "tensorflow", "rest api", "neural network", "git"],
            link: "https://github.com/jormyy/ecs171"
        },
        {
            name: "bil",
            desc: "Speech recognition virtual assistant capable of executing numerous commands.",
            skills: ["speech recognition", "ai", "python", "i/o handling", "automation"],
            link: "https://github.com/jormyy/BIL"
        },
        {
            name: "aggie platter",
            desc: "Webscraping tool that tracks nutrition facts at UC Davis dining commons.",
            skills: ["webscraping", "beautifulsoup", "requests", "python", "data processing"],
            link: "https://github.com/jormyy/aggie-platter"
        }
    ]

    return (
        <section id="projects" className="projects-section">
            <h2 className="heading">projects</h2>
            <div className="project-blocks">
                {projects.map((proj, index) => (
                    <div className="block" key={index}>
                        <h2>{proj.name}</h2>
                        <p>{proj.desc}</p>
                        <div className="skills-container">
                            {proj.skills.map((skill) => (
                                <span className="skill-tag">{skill}</span>
                            ))}
                        </div>
                        <a href={proj.link} className="github-btn" target="_blank">view source</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;