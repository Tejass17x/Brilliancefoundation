import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

const GoogleLogo = () => (
  <svg width="22" height="22" viewBox="0 0 48 48" style={{marginRight: 8, verticalAlign: 'middle'}}><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.9 33.1 30.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.6 0 5 .8 7 2.3l6.4-6.4C33.5 5.1 28.9 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.5 20-21 0-1.3-.1-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.2 19.4 13 24 13c2.6 0 5 .8 7 2.3l6.4-6.4C33.5 5.1 28.9 3 24 3c-7.2 0-13.4 4-17 9.7z"/><path fill="#FBBC05" d="M24 45c6.2 0 11.4-2 15.2-5.4l-7-5.7C30.2 36 27.3 37 24 37c-6.1 0-11.2-4.1-13-9.7l-7 5.4C7.2 41.1 14.9 45 24 45z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.7 7.5-11.7 7.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C36.9 5.1 30.8 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.5 20-21 0-1.3-.1-2.7-.5-4z"/></g></svg>
);

const GitHubLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{marginRight: 8, verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" fill="#fff"/></svg>
);

const courseOptions = [
  'Java Full Stack',
  'MERN Stack',
  'Python Programming',
  'Java Programming',
  'C++ Programming',
  'C Programming',
  'Data Structures & Algorithms (DSA)'
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const renderIcon = (Icon: IconType) => {
    return React.createElement(Icon as React.ComponentType<IconBaseProps>);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRequestCall = () => {
    // Add your request call logic here
    alert('Thank you for your interest! Our team will contact you shortly.');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Brilliance Foundation
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? renderIcon(FaTimes) : renderIcon(FaBars)}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#whychoose" className="nav-link" onClick={() => setIsOpen(false)}>
              Why Choose Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#courses" className="nav-link" onClick={() => setIsOpen(false)}>
              Courses
            </a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" className="nav-link" onClick={() => setIsOpen(false)}>
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a href="#mentors" className="nav-link" onClick={() => setIsOpen(false)}>
              Mentors
            </a>
          </li>
          <li className="nav-item">
            <a href="#faq" className="nav-link" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <button className="request-call-btn" onClick={handleRequestCall}>
              {renderIcon(FaPhone)}
              Request a Call
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 