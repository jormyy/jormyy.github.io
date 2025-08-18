import React from 'react';
import '../assets/styles/contactme.css';
import '../App.css';
import gmail from '../assets/images/gmail.svg'
import github from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'

const ContactMe = () => {
    const contacts = [
        {
            name: "Email",
            image: gmail,
            info: "jeremy1112ha@gmail.com",
            link: "mailto:jeremy1112ha@gmail.com",
            msg: "send email"
        },
        {
            name: "GitHub",
            image: github,
            info: "github.com/jormyy",
            link: "https://www.github.com/jormyy",
            msg: "view repos"
        },
        {
            name: "LinkedIn",
            image: linkedin,
            info: "linkedin.com/in/jeremy1112ha",
            link: "https://www.linkedin.com/in/jeremy1112ha",
            msg: "connect"
        },
    ];
    
    return (
        <section id="contact-me">
            <h2 className="heading">contact me</h2>
            <div className="contact-blocks">
                {contacts.map((contact, index) => (
                    <div className="block" key={index}>
                        <img src={contact.image} alt={contact.name} className="contact-icon"/>
                        <h2>{contact.name}</h2>
                        <div className="contact-info">{contact.info}</div>
                        <a href={contact.link} className="contact-link">{contact.msg}</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContactMe;