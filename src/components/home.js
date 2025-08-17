import React from 'react';
import '../assets/styles/home.css';
import '../App.css';

const Home = ({ onScrollToAboutMe }) => {
  return (
    <section id="home" className="home-section">
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my world of technology.</p>
    </section>
  );
};

export default Home;