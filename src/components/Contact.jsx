import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      color: 'var(--accent-primary)',
      title: 'Email',
      value: 'charu6758@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: Phone,
      color: 'var(--accent-secondary)',
      title: 'Phone',
      value: '+91 8054646457',
      description: 'Call me directly'
    },
    {
      icon: MapPin,
      color: 'var(--accent-tertiary)',
      title: 'Location',
      value: 'Amritsar, Punjab',
      description: 'Available for remote, on-site work'
    },
    {
      icon: Clock,
      color: 'var(--accent-quaternary)',
      title: 'Response Time',
      value: '24 hours',
      description: 'Average response time'
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Let's discuss your project and bring your ideas to life</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
            </div>
            
            <div className="contact-details">
              {contactInfo.map((item, index) => {
                const delay = `${index * 0.1}s`;
                return (
                  <div key={index} className="contact-item animate-fade-in-left" style={{animationDelay: delay}}>
                    <div className="contact-icon" style={{color: item.color}}>
                    <item.icon size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <p className="contact-value">{item.value}</p>
                    <p className="contact-description">{item.description}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
          
          <div className="contact-form-container animate-fade-in-right">
            {submitStatus === 'success' && (
              <div className="success-message animate-bounce-in">
                <CheckCircle size={20} />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <User size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <Mail size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <MessageSquare size={20} />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <MessageSquare size={20} />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              
              <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                <Send size={20} />
                Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;