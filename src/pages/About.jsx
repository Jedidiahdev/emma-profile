import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="container about-page">
    <section className="about-hero" id="about">
      <div className="about-text main-text-align">
        <h1 className="about-title"> Arch Eziechila C. <span>Emmanuel</span></h1>
        <p className="about-intro">
          A visionary architect with a passion for designing <span className="highlight">sustainable and functional spaces</span>. With a professional degree in Architecture, I've honed my skills in creating innovative buildings that are not only aesthetically pleasing, but also prioritize environmental responsibility.
        </p>
        <p className="about-intro">
          After completing my studies, I gained valuable experience working with top architectural firms like <span className="highlight">Ciyont Kuba Ltd</span>, where I contributed to various high-profiled projects like the supervision of one of the US Embassy roofs.
        </p>
        <p className="about-intro">
          My expertise spans from conceptual design to project management, with a keen eye for detail and a commitment to delivering exceptional results.
        </p>
        <Link to="/contact" className="btn">Get in Touch</Link>
      </div>
      <div className="about-image about-image-shift">
        <img src="Emma's Portfolio/emma.jpg" alt="Emma C. Eziechila" className="profile-img-right" />
      </div>
    </section>
  </div>
);

export default About;
