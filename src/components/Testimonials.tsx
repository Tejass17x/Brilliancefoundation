import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Rohan Gupta",
      role: "Software Development Engineer, Amazon",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png", // Tech icon
      text: "The mentorship and hands-on coding sessions helped me crack my SDE interviews at Amazon. The focus on DSA, system design, and mock interviews was a game changer for my career.",
      rating: 5
    },
    {
      name: "Sneha Rao",
      role: "Backend Developer, FinTech Startup",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721306.png", // Backend/Database icon
      text: "Learning advanced SQL and backend architecture from industry mentors gave me the confidence to build scalable APIs and ace my technical rounds. Highly recommended for aspiring backend engineers!",
      rating: 5
    },
    {
      name: "Amit Deshmukh",
      role: "Data Scientist, Analytics Co.",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721317.png", // Data/Algorithm icon
      text: "The DSA bootcamps and real-world project guidance helped me transition from a fresher to a data scientist. The mentors' industry experience and interview tips were invaluable.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const renderIcon = (Icon: IconType) => {
    return React.createElement(Icon as React.ComponentType<IconBaseProps>);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextTestimonial, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-content">
        <h2>Student Success Stories</h2>
        <p className="testimonials-subtitle">Hear from our successful students</p>
        
        <div 
          className="testimonials-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
            </div>
            <div className="testimonial-content">
              <div className="quote-icon">
                {renderIcon(FaQuoteLeft)}
              </div>
              <p className="testimonial-text">{testimonials[currentIndex].text}</p>
              <div className="testimonial-author">
                <h3>{testimonials[currentIndex].name}</h3>
                <p>{testimonials[currentIndex].role}</p>
                <div className="rating">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <button 
              className="carousel-button prev"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              {renderIcon(FaChevronLeft)}
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              className="carousel-button next"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              {renderIcon(FaChevronRight)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
