import React from 'react';
import '../assets/styles/projects.css';
import '../App.css';

const Projects = () => {
    const projects = [
        {
            name: "loyal listener",
            desc: "Web application that creates comprehensive Spotify playlists of an artist's complete discography.",
            link: "https://github.com/jormyy/loyal-listener"
        },
        {
            name: "ding",
            desc: "Online multiplater collaborative hand ranking game.",
            link: "https://github.com/jormyy/ding"
        },
        {
            name: "valence",
            desc: "Sports streaming site that aims to minimize ads and popups.",
            link: "https://github.com/jormyy/valence"
        },
        {
            name: "quick draw clone",
            desc: "Machine Learning model based on Google's Quick, Draw! game to recognize drawings.",
            link: "https://github.com/jormyy/ecs171"
        },
        {
            name: "bil",
            desc: "Speech recognition virtual assistant capable of executing numerous commands.",
            link: "https://github.com/jormyy/BIL"
        },
        {
            name: "aggie platter",
            desc: "CLI Webscraping tool that tracks nutrition facts at UC Davis dining commons.",
            link: "https://github.com/jormyy/aggie-platter"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="heading">projects</h2>
            <div className="project-blocks">
                {projects.map((proj, index) => (
                    <div className="block" key={index}>
                        <h2>{proj.name}</h2>
                        <p>{proj.desc}</p>
                        <a href={proj.link} className="github-btn" target="_blank" rel="noreferrer">view source</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;