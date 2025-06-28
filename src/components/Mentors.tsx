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
      name: "Ankit Verma",
      role: "Senior Java Full Stack Developer",
      expertise: ["Java", "Spring Boot", "React.js", "Full Stack", "Microservices"],
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "10+ years in enterprise software development. Expert in building scalable full stack applications using Java, Spring Boot, and React. Mentor for backend and microservices architecture.",
      achievements: [
        "Lead architect for a Fortune 500 e-commerce platform",
        "Speaker at JavaOne and Devoxx",
        "Mentored 200+ engineers in Java and microservices"
      ],
      social: {
        linkedin: "https://linkedin.com/in/ankitverma",
        twitter: "https://twitter.com/ankitverma_dev",
        email: "ankit.verma@industrymentors.com"
      }
    },
    {
      name: "Priya Singh",
      role: "Backend Engineer & SQL Specialist",
      expertise: ["Backend", "SQL", "PostgreSQL", "Node.js", "API Design"],
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Backend engineer with 8 years of experience in designing robust APIs and optimizing SQL databases. Passionate about data modeling and high-performance systems.",
      achievements: [
        "Database optimization for a fintech startup (reduced query time by 80%)",
        "Author of 'Mastering SQL for Developers'",
        "Conducted 50+ workshops on backend and database design"
      ],
      social: {
        linkedin: "https://linkedin.com/in/priyasingh-sql",
        email: "priya.singh@industrymentors.com"
      }
    },
    {
      name: "Rahul Mehta",
      role: "DSA & C++ Expert",
      expertise: ["Data Structures & Algorithms", "C++", "Competitive Programming", "System Design"],
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: "Ex-Google software engineer and ACM ICPC world finalist. Specializes in DSA, C++, and system design interviews. Helps students crack FAANG interviews.",
      achievements: [
        "ICPC World Finalist 2018",
        "Conducted 100+ DSA bootcamps",
        "Helped 300+ students get placed in top tech companies"
      ],
      social: {
        linkedin: "https://linkedin.com/in/rahulmehta-dsa",
        twitter: "https://twitter.com/rahulmehta_dsa",
        email: "rahul.mehta@industrymentors.com"
      }
    },
    {
      name: "Sneha Kapoor",
      role: "JavaScript & Frontend Specialist",
      expertise: ["JavaScript", "React.js", "TypeScript", "UI/UX", "Web Performance"],
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Frontend engineer with 7+ years of experience in building modern web apps. Expert in JavaScript, React, and UI/UX best practices. Loves teaching and open source.",
      achievements: [
        "Core contributor to popular React open-source libraries",
        "Speaker at JSConf Asia",
        "Organized 30+ frontend workshops for students and professionals"
      ],
      social: {
        linkedin: "https://linkedin.com/in/snehakapoor-js",
        email: "sneha.kapoor@industrymentors.com"
      }
    }
  ];

  const renderIcon = (Icon: IconType) => {
    return React.createElement(Icon as React.ComponentType<IconBaseProps>);
  };

  return (
    <section className="mentors-section" id="mentors">
      <div className="mentors-content">
        <h2>Our Industry Mentors</h2>
        <p className="mentors-subtitle">Learn from professionals in software development and engineering</p>
        
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
                    <a href={mentor.social.linkedin} className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      {renderIcon(FaLinkedinIn)}
                    </a>
                  )}
                  {mentor.social.twitter && (
                    <a href={mentor.social.twitter} className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
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
