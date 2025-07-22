import React from 'react';
import { Home, User, Code, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './Sidebar.css';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="sidebar">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        data-tooltip={isDark ? 'Light Mode' : 'Dark Mode'}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      <nav className="sidebar-nav">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`nav-button ${activeSection === id ? 'active' : ''}`}
            data-tooltip={label}
          >
            <Icon size={20} />
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;