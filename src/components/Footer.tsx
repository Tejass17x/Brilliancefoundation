import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';
import { styled } from '@mui/material';
import { PhotoSizeSelectActual } from '@mui/icons-material';

interface ContactItemProps {
  icon: IconType;
  text: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, text }) => (
  <div className="contact-item">
    {React.createElement(Icon as React.ComponentType<IconBaseProps>, { className: "contact-icon" })}
    <span>{text}</span>
  </div>
);

interface SocialIconProps {
  icon: IconType;
  label: string;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, label, href }) => (
  <a href={href} aria-label={label} className="social-icon">
    {React.createElement(Icon as React.ComponentType<IconBaseProps>)}
  </a>
);

const Footer = () => {
  return (
    <footer className="footer-section" id="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Contact Information */}
          <div className="footer-info">
            <h3>Contact Us</h3>
            <ContactItem icon={FaPhone} text="+918080068554"  />
            <ContactItem icon={FaEnvelope} text="info@brilliancefoundation.com" />
            <ContactItem icon={FaMapMarkerAlt} text="Vitthal Shopping Complex, Omkareshwar Temple,"/>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Map */}
          <div className="footer-map">
            <h3>Our Location</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.9536351979118!2d75.55676028150319!3d20.994089467897307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f4b047bec2b%3A0x3f2e45785458210d!2sBrilliance%20Foundation!5e0!3m2!1sen!2sin!4v1749384974675!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brilliance Foundation Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <SocialIcon icon={FaFacebookF} label="Facebook" href="#" />
          <SocialIcon icon={FaTwitter} label="Twitter" href="#" />
          <SocialIcon icon={FaLinkedinIn} label="LinkedIn" href="#" />
          <SocialIcon icon={FaInstagram} label="Instagram" href="#" />
        </div>

        {/* Copyright */}
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Brilliance Foundation. All rights reserved.</p>
          <p className="footer-disclaimer">
            Empowering minds, shaping futures through quality education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 