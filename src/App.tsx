import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import WhyChoose from './components/WhyChoose';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Mentors from './components/Mentors';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import CivilFoundation from './components/CivilFoundation';

function MainPortal() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <HeroCarousel />
      </div>
      <div id="whychoose">
        <WhyChoose />
      </div>
      <Courses />
      <Testimonials />
      <Mentors />
      <FAQ />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<MainPortal />} />
        <Route path="/civil" element={<CivilFoundation />} />
      </Routes>
    </Router>
  );
}

export default App;
