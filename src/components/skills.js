import React from 'react';
import '../assets/styles/skills.css';
import '../App.css';

const Skills = () => {
    const skills = [
        {
            section: "languages",
            skill_list: ["python", "javascript", "java", "c++", "c#", "go", "rust", "sql", "r", "swift", "typescript", "bash", "html", "css"]
        },
        {
            section: "frameworks/libraries",
            skill_list: ["react", "spring", "node.js", "express", "pytorch", "tensorflow", "opencv", "graphql", "selenium"]
        },
        {
            section: "infrastructure/tools",
            skill_list: ["aws", "gcp", "azure", "docker", "kubernetes", "git", "ci/cd", "postgresql", "mongodb", "redis",
                "linux", "ubuntu", "debian", "command line"]
        },
        {
            section: "practices",
            skill_list: ["agile", "test-driven development (tdd)", "object-oriented design (ood)", "microservices architecture", "rest api"]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <h2 className="heading">skills</h2>
            <div className="skill-blocks">
                {skills.map((skill, index) => (
                    <div className="block" key={index}>
                        <h2>{skill.section}</h2>
                        <div className="skills-container">
                            {skill.skill_list.map((item, i) => (
                                <span className="skill-tag" key={i}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;