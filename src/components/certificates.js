import React from 'react';
import '../assets/styles/certificates.css';
import '../App.css';
import devops from '../assets/images/devops_cert.jpg'

const Certificates = () => {
  const certificates = [
    {
      name: "Cybersecurity",
      company: "Google",
      year: "2025",
      image: ''
    },
    {
      name: "DevOps and Software Engineering",
      company: "IBM",
      year: "2023",
      image: devops
    },
  ];

  return (
    <section id="certificates">
      <h2 className="heading">certificates</h2>
      {certificates.map((cert, index) => (
        <div className="block" key={index}>
          <h2 className="certificate-name">{cert.name}</h2>
          <h3 className="certificate-company">{cert.company}</h3>
          <p className="certificate-year">{cert.year}</p>
          <img src={cert.image} alt={`${cert.name} certificate`} className="certificate-image"/>
        </div>
      ))}
    </section>
  );
};

export default Certificates;