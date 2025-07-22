import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Star, TrendingUp } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      featured: true,
      title: 'E-Commerce Web App',
      category: 'web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      rating: 4.9,
      views: '2.5k',
      github: 'https://github.com/charugupta615/E-commerce-Web-App',
      demo: 'https://e-commerce-web-app-8ps8.vercel.app/',
    },
    {
      id: 2,
      featured: false,
      title: 'Kiddie Joy Land',
      category: 'web',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'It is a vibrant and interactive platform designed especially for young children to explore, learn, and have fun.',
      technologies: ['React'],
      rating: 4.7,
      views: '1.8k',
      github: 'https://github.com/charugupta615/kiddie-joy-land',
      demo: 'https://kiddie-joy-land-rosy.vercel.app',
    },
    {
      id: 3,
      featured: true,
      title: 'Real Estate Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A beautiful real estate website with property listings and advanced search features',
      technologies: ['React'],
      rating: 4.8,
      views: '3.2k',
      github: 'https://github.com/charugupta615/Real-Estate',
      demo: 'https://real-estate-beryl-nine-77.vercel.app/',
    },
    {
      id: 4,
      featured: false,
      title: 'Glowhaus-full-stack',
      category: 'web',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A full-stack salon & spa booking application with React, Node.js, and MySQL',
      technologies: ['React', 'Node.js', 'MySQL', 'Express'],
      rating: 4.6,
      views: '1.5k',
      github: 'https://github.com/charugupta615/Glowhaus-full-stack',
      demo: 'https://glowhaus-full-stack.vercel.app/',
    },
    {
      id: 5,
      featured: true,
      title: 'Movie Game Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A fun and interactive website where players guess movies based on clues, emojis, or screenshots. 🍿🎬',
      technologies: ['React', 'CSS3', ' TypeScript'],
      rating: 4.9,
      views: '4.1k',
      github: 'https://github.com/charugupta615/Movie-Game',
      demo: 'https://movie-game-kappa.vercel.app',
    },
    {
      id: 6,
      featured: false,
      title: 'Chat Application',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Real-time chat application with file sharing and group chat features',
      technologies: ['React'],
      rating: 4.5,
      views: '2.1k',
      github: 'https://github.com/charugupta615/Chatbot',
      demo: 'https://chatbot-woad-psi-29.vercel.app',
    },
  ];

  const categories = ['all', 'web', 'mobile', 'design'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="section-title">
          <h2>My Portfolio</h2>
          <p>Here are some of my recent projects</p>
        </div>
        
        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const delay = `${index * 0.1}s`;
            return (
              <div key={project.id} className={`project-card card animate-bounce-in ${project.featured ? 'featured' : ''}`} style={{animationDelay: delay}}>
                {project.featured && (
                  <div className="featured-badge">
                    <Star size={16} />
                    <span>Featured</span>
                  </div>
                )}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-btn animate-pulse">
                      <Eye size={20} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn animate-pulse">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-btn animate-pulse">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <div className="project-rating">
                    <Star size={16} />
                    <span>{project.rating}</span>
                  </div>
                  <div className="project-views">
                    <TrendingUp size={16} />
                    <span>{project.views} views</span>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;