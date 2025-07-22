import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Modal from './components/Modal';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageTransition, setPageTransition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section) => {
    if (section === activeSection) return;
    
    setPageTransition(true);
    setTimeout(() => {
      setActiveSection(section);
      setPageTransition(false);
    }, 300);
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
          <div className="loader-text">Loading...</div>
        </div>
      </div>
    );
  }

  const renderCurrentPage = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onOpenModal={() => setIsModalOpen(true)} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onOpenModal={() => setIsModalOpen(true)} />;
    }
  };

  return (
    <div className="app">
      <ParticleBackground />
      <Sidebar activeSection={activeSection} setActiveSection={handleSectionChange} />
      
      <main className={`main-content ${pageTransition ? 'page-transition' : ''}`}>
        <div className="page-container">
          {renderCurrentPage()}
        </div>
      </main>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="scroll-progress"></div>
    </div>
  );
}

export default App;