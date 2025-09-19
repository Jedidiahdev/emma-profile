import React from 'react';


const Home = () => (
  <div className="container" id="home">
    <div className="intro-content main-text-align">
      <div className="greeting">HI, I'M</div>
  <h1 className="name">ARC EMMA C. <span className="logo-accent">EZIECHILA</span>.</h1>
      <p className="description">
        A passionate and detail-oriented Architect.<br />
        Dedicated to transforming ideas into inspiring spaces, blending creativity with technical expertise.<br />
        Committed to excellence, innovation, and creating environments that enrich lives and communities.
      </p>
      <div className="signature"></div>
    </div>
    <div className="image-container home-image-shift">
      <a href="react-portfolio/public/emma.jpg" target="_blank" rel="noopener noreferrer">
        <img src="react-portfolio/public/emma.jpg" alt="Architect Portrait" className="profile-img" />
      </a>
    </div>
  </div>
);

export default Home;
