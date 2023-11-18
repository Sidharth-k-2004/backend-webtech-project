import React from 'react';
import './aboutus.css';
import abtus from './abtus.jpeg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="heading">
        <h1>About Us</h1>
      </div>
      <div className="container">
        <div className="hero-content">
          <h2>
            <strong>Welcome to our website</strong>
          </h2>
          <p>
            Social, Global, Environmental, Governance issues are a problem that
            influences the common citizen of our country. This website is the
            platform where every individual can upload all the minor problems
            which in the future may lead to hazardous events, so that this can be
            witnessed by all our fellow beings and highlight all the events that
            are happening surrounding us and alert them from taking caution. This
            also becomes a field where you can come up with ideas to suppress
            these issues and maintain a harmonious and healthy Ecosystem.
            <br />
            <strong>"Let's Develop White Mind to Create a Change Catalyst...."</strong>
          </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="hero-image">
          <img src={abtus} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
