import React from 'react';
import '../assets/styles/certificates.css';
import '../App.css';

const Certificates = () => (
  <section id="certificates" className="certificates-section">
    <h2 className="certificates-heading">Certificates</h2>
    <div className="certificates-container">
      <div className="certificate-block">
        <h3 className="certificate-title">Certificate 1</h3>
        <p className="certificate-description">Description for Certificate 1.</p>
      </div>
      <div className="certificate-block">
        <h3 className="certificate-title">Certificate 2</h3>
        <p className="certificate-description">Description for Certificate 2.</p>
      </div>
    </div>
  </section>
);

export default Certificates;