import React from 'react';
import '../assets/styles/experience.css';

const Experience = () => (
    <section id="experience" className="experience-section">
        <h2 className="heading">Experience</h2>
        <div className="experience-blocks">
            <div className="block">
                <h2>Software Engineer @ Star Dental Group</h2>
                <p>Jun 2023 - Present</p>
                <ul className="hacker-bullets">
                    <li>Redesigned and rebuilt the organization’s outdated website with React, creating a cleaner and more modern interface that significantly improved usability, accessibility, and overall design, while also cutting over $300 annually in hosting costs.</li>
                    <li>Engineered a secure PostgreSQL-based login and scheduling system that fully automated patient–staff appointment management, reducing manual coordination, improving reliability, and saving the team an average of 1.5 hours per workday.</li>
                    <li>Collaborated with dental staff and leveraged cultural and language knowledge to design campaigns tailored for immigrant Korean families, building trust and accessibility within the community while increasing patient volume by 70%.</li>
                </ul>
            </div>
            <div className="block">
                <h2>Software Engineer Intern @ Zette</h2>
                <p>Jan 2024 - Jul 2024</p>
                <ul className="hacker-bullets">
                    <li>Developed a solution in Node.js to bypass paywalls and dynamically render article content within a custom Document Object Model (DOM), enabling 50,000+ users to access premium articles through Zette's subscription service.</li>
                    <li>Collaborated with cross-functional teams to optimize the performance and scalability of the article retrieval system, reducing load times by 15% and expanding platform capacity to support 4 additional publishing partners.</li>
                    <li>Created outreach scripts using Selenium to target potential investors across multiple channels, including email sequences and social media messaging, playing a key role in securing over $1 million and achieving the Startup of the Year award.</li>
                </ul>
            </div>
            <div className="block">
                <h2>Computer Science Tutor @ UC Davis</h2>
                <p>Oct 2023 - Apr 2024</p>
                <ul className="hacker-bullets">
                    <li>Committed 3+ hours per week to deliver personalized tutoring in core computer science topics, including data structures & algorithms in C/C++, and discrete mathematics to 20+ students, resulting in an average 7% improvement in grades.</li>
                    <li>Developed custom study materials and practice exercises tailored to different learning styles to reinforce key concepts, implementing 30+ interactive quizzes and visual aids that significantly increased student engagement and comprehension.</li>
                </ul>
            </div>
        </div>
    </section>
);

export default Experience;