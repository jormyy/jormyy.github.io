import React from 'react';
import '../assets/styles/experience.css';

const Experience = () => (
    <section id="experience" className="experience-section">
        <h2 className="heading">Experience</h2>
        <div className="experience-blocks">
            <div className="block">
                <h2>Software Engineer Intern @ Zette</h2>
                <p>Jan 2024 - Jul 2024</p>
                <ul className="hacker-bullets">
                    <li>Developed a solution to bypass paywalls and dynamically render article content within a custom Document Object Model (DOM), enabling 50,000+ users to access premium articles through Zette's subscription service.</li>
                    <li>Collaborated with cross-functional teams to optimize the performance and scalability of the article retrieval system, reducing load times by 15% and expanding platform capacity to support 4 additional publishing partners.</li>
                    <li>Created outreach scripts targeting potential investors across multiple channels, including email sequences and social media messaging, playing a key role in securing over $1 million and achieving the "Startup of the Year" award.</li>
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