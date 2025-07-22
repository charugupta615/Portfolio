import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shape"></div>
        <div className="floating-elements">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-circle"></div>
        </div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="image-container">
              <img src="https://avatars.githubusercontent.com/u/173037382?v=4" alt="Profile" />
              <div className="image-overlay"></div>
            </div>
          </div>
          
          <div className="hero-text">
            <div className="hero-intro">
              <span className="intro-line">—</span>
              <h1>
                I'M <span className="name-highlight">CHARU GUPTA</span>
              </h1>
              <h2 className="profession">Software Developer</h2>
            </div>
            
            <p className="hero-description">
              I'm a passionate web designer & front-end developer focused on
              crafting clean & user-friendly experiences. I am passionate about building
              excellent software that improves the lives of those around me.
            </p>
            
            <button className="more-about-btn" onClick={onOpenModal}>
              <span>MORE ABOUT ME</span>
              <div className="btn-icon">
                <ArrowRight size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;