import React from 'react';
import { FaHardHat, FaDraftingCompass, FaBuilding, FaMapMarkedAlt, FaWater, FaRoad } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';
import './CivilFoundation.css';

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

const CivilFoundation: React.FC = () => {
  const features: Feature[] = [
    {
      icon: FaHardHat,
      title: "Experienced Civil Faculty",
      description: "Learn from top civil engineers and academic experts."
    },
    {
      icon: FaDraftingCompass,
      title: "Practical Design Projects",
      description: "Work on real-world civil engineering design and drafting."
    },
    {
      icon: FaBuilding,
      title: "Structural Engineering Focus",
      description: "Master the fundamentals of structures, materials, and construction."
    },
    {
      icon: FaMapMarkedAlt,
      title: "Surveying & Geomatics",
      description: "Hands-on training in land surveying and mapping technologies."
    },
    {
      icon: FaWater,
      title: "Water Resources & Environment",
      description: "Explore water management, environmental engineering, and sustainability."
    },
    {
      icon: FaRoad,
      title: "Transportation & Infrastructure",
      description: "Learn about roads, bridges, and urban infrastructure planning."
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="why-choose-content glass-effect">
        <h2>
          Why Choose <span className="highlight">Civil Brilliance Foundation</span>?
        </h2>
        <p className="subtitle">
          Empowering future civil engineers with practical skills and expert guidance.
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

export default CivilFoundation; 