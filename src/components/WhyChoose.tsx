import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaUsers, FaChartLine, FaHandshake, FaGlobe } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

const WhyChoose: React.FC = () => {
  const features: Feature[] = [
    {
      icon: FaGraduationCap,
      title: "Expert Faculty",
      description: "Learn from industry veterans and experienced educators"
    },
    {
      icon: FaLaptopCode,
      title: "Industry-Driven Curriculum",
      description: "Stay ahead with cutting-edge technologies and methodologies"
    },
    {
      icon: FaUsers,
      title: "Real-World Projects",
      description: "Build portfolio-worthy projects with real industry applications"
    },
    {
      icon: FaChartLine,
      title: "Career Growth",
      description: "Comprehensive career support and placement assistance"
    },
    {
      icon: FaHandshake,
      title: "Industry Partnerships",
      description: "Direct connections with leading tech companies"
    },
    {
      icon: FaGlobe,
      title: "Global Community",
      description: "Join a diverse network of learners and professionals"
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="why-choose-content glass-effect">
        <h2>
          Why Choose <span className="highlight">Brilliance Foundation</span>?
        </h2>
        <p className="subtitle">
          We provide everything you need for a successful learning journey
        </p>
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {React.createElement(Icon as React.ComponentType<IconBaseProps>, { size: 24 })}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose; 