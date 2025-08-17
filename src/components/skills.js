import React from 'react';
import '../assets/styles/skills.css';
import '../App.css';

const Skills = () => (
  <section id="skills">
    <h2 className="heading">skills</h2>
    <div className="skill-blocks">
      <div className="block">
        <h2>Languages</h2>
        <div class="skills-container">
            <span class="skill-tag">Python</span>
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">Java</span>
            <span class="skill-tag">C++</span>
            <span class="skill-tag">C#</span>
            <span class="skill-tag">Go</span>
            <span class="skill-tag">Rust</span>
            <span class="skill-tag">SQL</span>
            <span class="skill-tag">R</span>
            <span class="skill-tag">Swift</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">Bash</span>
            <span class="skill-tag">HTML</span>
            <span class="skill-tag">CSS</span>
        </div>
      </div>
      <div className="block">
        <h2>Technologies</h2>
        <div class="skills-container">
            <span class="skill-tag">React</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">Express</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">CI/CD</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Kubernetes</span>
            <span class="skill-tag">AWS</span>
            <span class="skill-tag">GCP</span>
            <span class="skill-tag">Azure</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">MongoDB</span>
            <span class="skill-tag">Redis</span>
            <span class="skill-tag">GraphQL</span>
            <span class="skill-tag">Selenium</span>
            <span class="skill-tag">PyTorch</span>
            <span class="skill-tag">TensorFlow</span>
            <span class="skill-tag">OpenCV</span>
            <span class="skill-tag">Linux</span>
            <span class="skill-tag">Ubuntu</span>
            <span class="skill-tag">Debian</span>
            <span class="skill-tag">Command Line</span>
        </div>
      </div>
      <div className="block">
        <h2>Practices</h2>
        <div class="skills-container">
            <span class="skill-tag">Agile</span>
            <span class="skill-tag">Test-Driven Development (TDD)</span>
            <span class="skill-tag">Object-Oriented Design (OOD)</span>
            <span class="skill-tag">Microservices Architecture</span>
            <span class="skill-tag">REST API</span>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;