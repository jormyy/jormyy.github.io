import React from 'react';
import '../assets/styles/experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <h2 className="heading">Experience</h2>
            <div className="experience-blocks">
                <div className="block">
                    <h2>Software Engineer (Contract)</h2>
                    <p>Jun 2025 - Present</p>
                    <ul className="hacker-bullets">
                        <li>Replaced a legacy website with a React-based system, improving UI/UX while reducing annual hosting costs by over 15x.</li>
                        <li>Engineered a secure PostgreSQL scheduling system that fully automated patient coordination, eliminating manual booking errors and reclaiming 1.5 hours of staff productivity daily.</li>
                        <li>Strategized and designed targeted community outreach campaigns for the Korean immigrant community, leveraging cultural insights to increase patient volume by 70% and improve local healthcare access.</li>
                    </ul>
                </div>
                <div className="block">
                    <h2>Software Engineer Intern @ Zette</h2>
                    <p>Jan 2024 - Jul 2024</p>
                    <ul className="hacker-bullets">
                        <li>Developed a high-volume content rendering engine in Node.js, utilizing a custom DOM implementation to dynamically serve premium article content to 50,000+ active users.</li>
                        <li>Optimized the core article retrieval architecture, achieving a 15% reduction in load latency and scaling backend capacity to support onboarding for 4 major publishing partners.</li>
                        <li>Engineered an automated workflow pipelining using Selenium to streamline investor outreach, processing high-volume data sequences that supported the successful closing of a $1.7M pre-seed round.</li>
                    </ul>
                </div>
                <div className="block">
                    <h2>Computer Science Tutor @ UC Davis</h2>
                    <p>Oct 2023 - Apr 2024</p>
                    <ul className="hacker-bullets">
                        <li>Mentored 20+ students in core CS fundamentals, specifically Data Structures & Algorithms and Discrete Mathematics, reinforcing technical mastery though code reviews and debugging sessions.</li>
                        <li>Developed custom interactive exercises and visual aids to simplify complex logic, resulting in a 7% average grade improvement for struggling students.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;