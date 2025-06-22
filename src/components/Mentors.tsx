import React from 'react';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

interface Mentor {
  name: string;
  role: string;
  expertise: string[];
  image: string;
  bio: string;
  achievements: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const Mentors: React.FC = () => {
  const mentors: Mentor[] = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Director & Physics Expert",
      expertise: ["JEE Advanced", "KVPY", "Physics Olympiad"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      bio: "Ph.D. from IIT Delhi with 15+ years of teaching experience. Former IIT-JEE topper and author of best-selling physics books.",
      achievements: [
        "Published 10+ research papers",
        "Mentored 1000+ IIT-JEE selections",
        "Author of 'Advanced Physics for JEE'"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rajesh@brilliancefoundation.com"
      }
    },
    {
      name: "Dr. Priya Sharma",
      role: "Chemistry Department Head",
      expertise: ["NEET", "JEE Main", "Chemistry Olympiad"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      bio: "Ph.D. in Organic Chemistry from IISc Bangalore. 12 years of experience in coaching NEET and JEE aspirants.",
      achievements: [
        "National Teacher Award 2022",
        "Author of 'Organic Chemistry Simplified'",
        "95% success rate in NEET"
      ],
      social: {
        linkedin: "#",
        email: "priya@brilliancefoundation.com"
      }
    },
    {
      name: "Prof. Amit Patel",
      role: "Mathematics Expert",
      expertise: ["JEE Advanced", "Mathematics Olympiad", "KVPY"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      bio: "M.Tech from IIT Bombay with specialization in Applied Mathematics. Known for his unique problem-solving techniques.",
      achievements: [
        "Mathematics Olympiad Mentor",
        "Developed innovative teaching methods",
        "90% success rate in JEE Advanced"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "amit@brilliancefoundation.com"
      }
    },
    {
      name: "Dr. Neha Gupta",
      role: "Biology Department Head",
      expertise: ["NEET", "AIIMS", "Biology Olympiad"],
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      bio: "Ph.D. in Molecular Biology with 10+ years of teaching experience. Expert in making complex biological concepts simple.",
      achievements: [
        "Best Teacher Award 2021",
        "Author of 'Biology for NEET'",
        "98% success rate in AIIMS"
      ],
      social: {
        linkedin: "#",
        email: "neha@brilliancefoundation.com"
      }
    }
  ];

  const renderIcon = (Icon: IconType) => {
    return React.createElement(Icon as React.ComponentType<IconBaseProps>);
  };

  return (
    <section className="mentors-section" id="mentors">
      <div className="mentors-content">
        <h2>Our Expert Mentors</h2>
        <p className="mentors-subtitle">Learn from the best minds in education</p>
        
        <div className="mentors-grid">
          {mentors.map((mentor, index) => (
            <div key={index} className="mentor-card">
              <div className="mentor-image">
                <img src={mentor.image} alt={mentor.name} />
              </div>
              <div className="mentor-info">
                <h3>{mentor.name}</h3>
                <p className="mentor-role">{mentor.role}</p>
                <div className="mentor-expertise">
                  {mentor.expertise.map((skill, idx) => (
                    <span key={idx} className="expertise-tag">{skill}</span>
                  ))}
                </div>
                <p className="mentor-bio">{mentor.bio}</p>
                <div className="mentor-achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {mentor.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="mentor-social">
                  {mentor.social.linkedin && (
                    <a href={mentor.social.linkedin} className="social-link" aria-label="LinkedIn">
                      {renderIcon(FaLinkedinIn)}
                    </a>
                  )}
                  {mentor.social.twitter && (
                    <a href={mentor.social.twitter} className="social-link" aria-label="Twitter">
                      {renderIcon(FaTwitter)}
                    </a>
                  )}
                  {mentor.social.email && (
                    <a href={`mailto:${mentor.social.email}`} className="social-link" aria-label="Email">
                      {renderIcon(FaEnvelope)}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors; 