import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What courses does Brilliance Foundation offer?",
      answer: "Brilliance Foundation specializes in IT courses, providing comprehensive training in various technology domains. Our curriculum is designed to prepare students for industry requirements and help them secure high-paying packages in the IT sector."
    },
    {
      question: "What is the qualification of your faculty members?",
      answer: "Our faculty members are industry professionals who work in reputed companies and bring their real-world experience to the classroom. They are highly qualified and well-versed in their respective domains, ensuring students receive practical and industry-relevant knowledge."
    },
    {
      question: "What is your teaching methodology?",
      answer: "We follow an industrial teaching methodology that focuses on practical implementation and real-world scenarios. Our approach combines theoretical knowledge with hands-on experience, ensuring students are well-prepared for industry challenges. The class size is optimized for individual attention, and we maintain a comfortable learning environment."
    },
    {
      question: "Do you provide course-related materials?",
      answer: "Yes, we provide comprehensive course-related materials to support your learning journey. This includes study materials, practical assignments, project work, and additional resources to help you master the concepts and stay updated with industry trends."
    },
    {
      question: "What is the class environment like?",
      answer: "We maintain a comfortable and conducive learning environment with modern infrastructure. Our classrooms are well-equipped with necessary technology and resources. The class size is optimized to ensure individual attention and effective learning."
    },
    {
      question: "What are the career prospects after completing the course?",
      answer: "Our courses are designed to prepare students for high-paying packages in the IT industry. With our industry-aligned curriculum and experienced faculty, students are well-equipped to secure positions in reputed companies. We also provide placement assistance and career guidance to help students achieve their career goals."
    },
    {
      question: "How do you ensure quality education?",
      answer: "We ensure quality education through our experienced faculty members who are actively working in the industry, practical-oriented teaching methodology, and comprehensive course materials. Regular assessments and feedback mechanisms help us maintain and improve our educational standards."
    },
    {
      question: "What makes Brilliance Foundation different from other institutes?",
      answer: "What sets us apart is our industry-experienced faculty, practical teaching methodology, comfortable learning environment, and comprehensive course materials. We focus on providing real-world knowledge and skills that are directly applicable in the IT industry, helping students secure high-paying packages."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderIcon = (Icon: IconType) => {
    return React.createElement(Icon as React.ComponentType<IconBaseProps>);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-content">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Find answers to common questions about our IT courses and services</p>
        
        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                {openIndex === index ? renderIcon(FaChevronUp) : renderIcon(FaChevronDown)}
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 