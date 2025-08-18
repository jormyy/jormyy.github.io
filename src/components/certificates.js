import { React, useState } from 'react';
import '../assets/styles/certificates.css';
import '../App.css';
import devops from '../assets/images/devops_cert.jpg'
import cybersec from '../assets/images/cybersec_cert.jpg'

const Certificates = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const certificates = [
        {
            name: "Cybersecurity",
            company: "Google",
            year: "2025",
            image: cybersec
        },  
        {
            name: "DevOps",
            company: "IBM",
            year: "2023",
            image: devops
        },
    ];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="certificates">
            <h2 className="heading">certificates</h2>
            <div className="certificate-blocks">
                {certificates.map((cert, index) => (
                    <div className="block" key={index}>
                        <h2 className="certificate-name">{cert.name}</h2>
                        <h3 className="certificate-company">{cert.company}</h3>
                        <p className="certificate-year">{cert.year}</p>
                        <img 
                            src={cert.image} 
                            alt={`${cert.name} certificate`} 
                            className="certificate-image"
                            onClick={() => openModal(cert.image)}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>×</button>
                        <img 
                            src={selectedImage} 
                            alt="Enlarged certificate" 
                            className="enlarged-image"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;