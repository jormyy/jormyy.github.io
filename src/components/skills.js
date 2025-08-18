import React from 'react';
import '../assets/styles/skills.css';
import '../App.css';

const Skills = () => (
    <section id="skills">
        <h2 className="heading">skills</h2>
        <div className="skill-blocks">
            <div className="block">
                <h2>Languages</h2>
                <div className="skills-container">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">C++</span>
                    <span className="skill-tag">C#</span>
                    <span className="skill-tag">Go</span>
                    <span className="skill-tag">Rust</span>
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">R</span>
                    <span className="skill-tag">Swift</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">Bash</span>
                    <span className="skill-tag">HTML</span>
                    <span className="skill-tag">CSS</span>
                </div>
            </div>
            <div className="block">
                <h2>Technologies</h2>
                <div className="skills-container">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express</span>
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">CI/CD</span>
                    <span className="skill-tag">Docker</span>
                    <span className="skill-tag">Kubernetes</span>
                    <span className="skill-tag">AWS</span>
                    <span className="skill-tag">GCP</span>
                    <span className="skill-tag">Azure</span>
                    <span className="skill-tag">PostgreSQL</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">Redis</span>
                    <span className="skill-tag">GraphQL</span>
                    <span className="skill-tag">Selenium</span>
                    <span className="skill-tag">PyTorch</span>
                    <span className="skill-tag">TensorFlow</span>
                    <span className="skill-tag">OpenCV</span>
                    <span className="skill-tag">Linux</span>
                    <span className="skill-tag">Ubuntu</span>
                    <span className="skill-tag">Debian</span>
                    <span className="skill-tag">Command Line</span>
                </div>
            </div>
            <div className="block">
                <h2>Practices</h2>
                <div className="skills-container">
                    <span className="skill-tag">Agile</span>
                    <span className="skill-tag">Test-Driven Development (TDD)</span>
                    <span className="skill-tag">Object-Oriented Design (OOD)</span>
                    <span className="skill-tag">Microservices Architecture</span>
                    <span className="skill-tag">REST API</span>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;