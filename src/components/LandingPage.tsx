import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleDepartmentClick = (department: string) => {
    if (department === 'civil') {
      navigate('/civil');
    } else {
      navigate('/portal');
    }
  };

  return (
    <div className="landing-page">
      <h1 className="main-heading">
        <span className="welcome-bold">Welcome <span className="to">to</span></span> <br />
        <span className="foundation">Brilliance <span className="foundation-light">Foundation</span></span>
      </h1>
      <p className="subtitle text-white">
        Unlock your potential with our comprehensive student portal. Access quality education, watch expert-led videos, and join a community of learners dedicated to excellence.
      </p>
      <div className="department-buttons">
        <button className="dept-button civil" onClick={() => handleDepartmentClick('civil')}>
          Civil Section
        </button>
        <button className="dept-button it" onClick={() => handleDepartmentClick('it')}>
          IT Sections
        </button>
      </div>
    </div>
  );
};

export default LandingPage; 