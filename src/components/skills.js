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
            section: "technologies",
            skill_list: ["react", "node.js", "express", "git", "ci/cd", "docker", "kubernetes", "aws", "gcp", "azure", "postgresql", "mongodb",
                "redis", "graphql", "selenium", "pytorch", "tensorflow", "opencv", "linux", "ubuntu", "debian", "command line"]
        },
        {
            section: "practices",
            skill_list: ["agile", "test-driven development (tdd)", "object-oriented design (ood)", "microservices architecture", "rest api"]
        }
    ]

    return (
        <section id="skills">
            <h2 className="heading">skills</h2>
            <div className="skill-blocks">
                {skills.map((skill, index) => (
                    <div className="block" key="index">
                        <h2>{skill.section}</h2>
                        <div className="skills-container">
                            {skill.skill_list.map((item) => (
                                <span className="skill-tag">{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;