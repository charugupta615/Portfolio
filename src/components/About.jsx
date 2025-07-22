import React from 'react';
import { Award, Users, Coffee, Calendar, Zap, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed', color: 'var(--accent-primary)' },
    { icon: Users, value: '30+', label: 'Happy Clients', color: 'var(--accent-secondary)' },
    { icon: Coffee, value: '500+', label: 'Cups of Coffee', color: 'var(--accent-tertiary)' },
    { icon: Calendar, value: '3+', label: 'Years Experience', color: 'var(--accent-quaternary)' },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know more about who I am and what I do</p>
        </div>
        
        <div className="about-content">
          <div className="about-text animate-fade-in-left">
            <h3>I'm a passionate developer who loves creating digital experiences</h3>
            <p>
              With over 1 years of experience in web development, I specialize in creating
              modern, responsive websites and applications. My passion lies in combining
              technical expertise with creative design to deliver exceptional user experiences.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying up-to-date with the
              latest technologies and best practices. When I'm not coding, you can find me
              exploring new technologies, contributing to open-source projects, or enjoying
              a good cup of coffee.
            </p>
            <div className="skills-overview">
              <h4>What I Do:</h4>
              <ul>
                <li>Full-Stack Web Development</li>
                <li>Responsive Design & UI/UX</li>
                <li>API Development & Integration</li>
                <li>Database Design & Management</li>
              </ul>
            </div>
          </div>
          
          <div className="about-image animate-fade-in-right">
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Working" />
          </div>
        </div>
        
        
        <div className="about-extra">
          <div className="passion-section animate-fade-in-up">
            <div className="passion-icon">
              <Heart size={40} />
            </div>
            <h3>My Passion</h3>
            <p>
              I'm passionate about creating digital experiences that make a difference. 
              Every line of code I write is crafted with purpose and attention to detail.
            </p>
          </div>
          
          <div className="energy-section animate-fade-in-up">
            <div className="energy-icon">
              <Zap size={40} />
            </div>
            <h3>Always Learning</h3>
            <p>
              Technology evolves rapidly, and so do I. I'm constantly exploring new 
              technologies and methodologies to stay at the forefront of development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;