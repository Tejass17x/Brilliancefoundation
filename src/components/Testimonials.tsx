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
      name: "Rahul Sharma",
      role: "IIT-JEE Advanced 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      text: "Brilliance Foundation transformed my JEE preparation journey. The personalized attention and expert guidance helped me secure AIR 45 in JEE Advanced. The faculty's dedication and innovative teaching methods made complex concepts easy to understand.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "NEET 2023",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      text: "The structured approach and regular mock tests at Brilliance Foundation prepared me well for NEET. The teachers are incredibly supportive and the study material is comprehensive. I'm grateful for their guidance in achieving my medical school dream.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "KVPY Scholar 2023",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3NvcnxlbnwwfHwwfHx8MA%3D%3D",
      text: "The research-oriented approach at Brilliance Foundation helped me develop a deeper understanding of scientific concepts. The faculty's expertise and the institute's focus on practical learning were instrumental in my KVPY success.",
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