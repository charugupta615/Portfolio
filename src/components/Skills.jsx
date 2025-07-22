import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-skill');
          }
        });
      },
      { threshold: 0.3 }
    );

    skillsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: 'HTML',
      level: 90,
      icon: '🌐',
      color: '#E34F26'
    },
    {
      name: 'CSS',
      level: 85,
      icon: '🎨',
      color: '#1572B6'
    },
    {
      name: 'JavaScript',
      level: 80,
      icon: '⚡',
      color: '#F7DF1E'
    },
    {
      name: 'Canva Editing',
      level: 70,
      icon: '🎭',
      color: '#00C4CC'
    },
    {
      name: 'Video Editing',
      level: 80,
      icon: '🎬',
      color: '#FF6B6B'
    },
    {
      name: 'React.js',
      level: 75,
      icon: '🔧',
      color: '#FAAD4D'
    },
    {
      name: 'Node.js',
      level: 85,
      icon: '📱',
      color: '#E91E63'
    },
    {
      name: 'Express.js',
      level: 85,
      icon: '📱',
      color: '#E91E63'
    },
    {
      name: 'MySql',
      level: 85,
      icon: '📱',
      color: '#E91E63'
    },
    {
      name: 'MongoDB',
      level: 85,
      icon: '📱',
      color: '#E91E63'
    }
  ];

  const achievements = [
    {
      number: '10+',
      label: 'Projects Completed',
      icon: '🏆'
    },
    {
      number: '1+',
      label: 'Years Experience',
      icon: '📅'
    },
    {
      number: '500+',
      label: 'Cups of Coffee',
      icon: '☕'
    }
  ];

  const whyChooseMe = [
    'Clean & Modern Code',
    'Responsive Design',
    'Fast Loading Times',
    'SEO Optimized',
    'Cross-Browser Compatible',
    '24/7 Support'
  ];

  return (
    <section className="skills-page">
      <div className="skills-background">
        <div className="skills-shape"></div>
        <div className="floating-elements">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-circle"></div>
        </div>
      </div>
      
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="skills-title">Skill Set</h1>
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="skill-item"
                ref={(el) => skillsRef.current[index] = el}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-info">
                  <div className="skill-icon-name">
                    <div className="skill-icon" style={{ backgroundColor: skill.color }}>
                      <span>{skill.icon}</span>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      '--skill-width': `${skill.level}%`,
                      '--skill-color': skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="achievements-section">
            <h2 className="section-subtitle">My Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-number">{achievement.number}</div>
                  <div className="achievement-label">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Me Section */}
          <div className="why-choose-section">
            <h2 className="section-subtitle">Why Choose Me?</h2>
            <div className="why-choose-grid">
              {whyChooseMe.map((point, index) => (
                <div key={index} className="why-choose-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="check-icon">✓</div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;