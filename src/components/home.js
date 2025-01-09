import React from 'react';
import '../assets/styles/home.css';
import '../App.css';

const Home = ({ onScrollToAboutMe }) => {
  return (
    <section className="home-section">
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my world of cybersecurity and technology.</p>
    </section>
  );
};

export default Home;