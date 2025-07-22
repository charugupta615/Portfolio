import React from 'react';
import { X, Download, Calendar, MapPin, Phone, Mail, Award, Code, Palette, Database } from 'lucide-react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const personalInfo = [
    { label: 'First Name', value: 'Charu', icon: null },
    { label: 'Last Name', value: 'Gupta', icon: null },
    { label: 'Age', value: '22 Years', icon: Calendar },
    { label: 'Nationality', value: 'Indian', icon: null },
    { label: 'Freelance', value: 'Available', icon: null },
    { label: 'Address', value: 'Amritsar, India', icon: MapPin },
    { label: 'Phone', value: '8054646457', icon: Phone },
    { label: 'Email', value: 'charu6758@gmail.com', icon: Mail },
    { label: 'Languages', value: 'English, Hindi', icon: null },
  ];

  const education = [
    {
      year: '2020-2021',
      degree: 'Non-Medical',
      institution: 'Ajanta Public School',
      Percentage: '76.4%',
    },
    {
      year: '2021-2025',
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Guru Nanak Dev University, Amritsar',
      CGPA: '7.68/10'
    }
  ];

  const experience = [
    {
      year: '2025-Present',
      position: 'Full Stack Developer',
      company: 'Genesis Techno Soft',
      description: 'Leading frontend development projects using React.js, and modern CSS frameworks.'
    },

  ];

  const skills = [
    { category: 'Frontend', icon: Code, items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
    { category: 'Backend', icon: Database, items: ['Node.js', 'Express.js',] },
    { category: 'Design', icon: Palette, items: ['Figma', 'Canva','Photoshop', 'UI/UX Design'] },
    { category: 'Tools', icon: Award, items: ['Git',  'MongoDB', 'MySQL'] }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-content">
          <div className="modal-header">
            <h2>About Me</h2>
            <p>Get to know more about my background, skills, and experience</p>
          </div>
          
          <div className="modal-tabs">
            <div className="tab-content">
              {/* Personal Information */}
              <div className="info-section">
                <h3>Personal Information</h3>
                <div className="personal-grid">
                  {personalInfo.map((item, index) => (
                    <div key={index} className="info-item">
                      <div className="info-label">
                        {item.icon && <item.icon size={16} />}
                        <span>{item.label}:</span>
                      </div>
                      <div className="info-value">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="info-section">
                <h3>Education</h3>
                <div className="timeline">
                  {education.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-year">{item.year}</div>
                      <div className="timeline-content">
                        <h4>{item.degree}</h4>
                        <p className="institution">{item.institution}</p>
                        <p className="description">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="info-section">
                <h3>Experience</h3>
                <div className="timeline">
                  {experience.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-year">{item.year}</div>
                      <div className="timeline-content">
                        <h4>{item.position}</h4>
                        <p className="institution">{item.company}</p>
                        <p className="description">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="info-section">
                <h3>Skills & Technologies</h3>
                <div className="skills-grid">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="skill-group">
                      <div className="skill-header">
                        <skillGroup.icon size={20} />
                        <h4>{skillGroup.category}</h4>
                      </div>
                      <div className="skill-tags">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download CV */}
              <div className="info-section">
                <div className="download-section">
                  <h3>Download My Resume</h3>
                  <p>Get a detailed overview of my experience, skills, and achievements.</p>
                  <a 
                    href="/cv/Charu24 Resume.pdf" 
                    download="Charu24 Resume.pdf"
                    className="download-btn"
                  >
                    <Download size={20} />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;