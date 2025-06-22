import React, { useState } from 'react';

interface Course {
  icon: string;
  iconType?: 'img';
  emojiIcon?: string;
  title: string;
  description: string;
  primary?: boolean;
  curriculum: string[];
  type: 'fullstack' | 'programming';
}

const courses: Course[] = [
  {
    icon: '📊',
    title: 'Data Structures & Algorithms (DSA)',
    description: 'Master Data Structures & Algorithms in C, C++, and JavaScript for coding interviews and problem-solving.',
    curriculum: [
      'Introduction to DSA',
      'Arrays & Strings',
      'Linked Lists',
      'Stacks & Queues',
      'Trees & Binary Trees',
      'Graphs & Traversals',
      'Sorting & Searching Algorithms',
      'Recursion & Backtracking',
      'Dynamic Programming',
      'Practice Problems in C, C++, JavaScript'
    ],
    type: 'programming',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    iconType: 'img',
    title: 'C++ Programming',
    description: 'Master C++ for competitive programming and software development.',
    curriculum: [
      'C++ Basics',
      'OOP in C++',
      'STL',
      'File Handling',
      'Competitive Programming'
    ],
    type: 'programming',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    iconType: 'img',
    title: 'C Programming',
    description: 'Solid foundation in C programming for all engineering and CS students.',
    curriculum: [
      'C Basics',
      'Pointers',
      'Data Structures',
      'File I/O',
      'Projects'
    ],
    type: 'programming',
  },
  {
    icon: '🌐',
    title: 'Java Full Stack',
    description: 'Become a full stack developer using Java, Spring Boot, and modern frontend frameworks.',
    primary: true,
    curriculum: [
      'Core Java & OOP',
      'Spring Boot',
      'REST APIs',
      'Frontend with React',
      'Database (MySQL, MongoDB)',
      'Deployment & DevOps'
    ],
    type: 'fullstack',
  },
  {
    icon: '⚛️',
    title: 'MERN Stack',
    description: 'Master MongoDB, Express, React, and Node.js for modern web development.',
    primary: true,
    curriculum: [
      'JavaScript & ES6',
      'Node.js & Express',
      'MongoDB',
      'React.js',
      'API Development',
      'Project Deployment'
    ],
    type: 'fullstack',
  },
  {
    icon: 'https://image.similarpng.com/file/similarpng/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png',
    iconType: 'img',

    title: 'Python Programming',
    description: 'Learn Python from basics to advanced, including data science and web development.',
    curriculum: [
      'Python Basics',
      'OOP in Python',
      'Data Structures',
      'Web with Django/Flask',
      'Data Science Intro'
    ],
    type: 'programming',
  },
  {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvs5s5526zplGZN07CmKspV5v1i5_DwzFzXg&s',
   iconType: 'img',
    title: 'Java Programming',
    description: 'Comprehensive Java programming from beginner to advanced topics.',
    curriculum: [
      'Java Basics',
      'OOP Concepts',
      'Collections',
      'Exception Handling',
      'File I/O',
      'Mini Projects'
    ],
    type: 'programming',
  }
];

const Courses = () => {
  const [selected, setSelected] = useState<Course | null>(null);

  const fullStackCourses = courses.filter(c => c.type === 'fullstack');
  const programmingCourses = courses.filter(c => c.type === 'programming');

  const renderIcon = (course: Course) => {
    if (course.iconType === 'img') {
      return <img src={course.icon} alt={course.title + ' logo'} className="course-logo-img" />;
    }
    return <span style={{fontSize: '2rem', lineHeight: 1}}>{course.icon}</span>;
  };

  return (
    <section className="courses-section" id="courses">
      <h2 className="section-title bg-yellow-500" style={{display:'flex',justifyContent:'center',textAlign: 'center'}}>Our Courses</h2>
      <div className="courses-group">
        <h3 className="courses-group-title"  style={{display:'flex',justifyContent:'center',color: 'white',textAlign: 'center'}}>Full Stack Courses</h3>
        <div className="courses-list">
          {fullStackCourses.map((c, i) => (
            <div
              className={`course-card${c.primary ? ' primary-course' : ''}`}
              key={c.title}
              style={{ animationDelay: `${i * 0.2 + 0.2}s` }}
            >
              <div className="course-icon">{renderIcon(c)}</div>
              <div className="course-title">{c.title}</div>
              <div className="course-description">{c.description}</div>
              <button className=" btn22 btn-primary mt-2 border2" onClick={() => setSelected(c)} style={{marginTop: '20px', backgroundColor:'#0d6efd'}}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="courses-group">
        <h3 className="courses-group-title"  style={{display:'flex',justifyContent:'center',textAlign: 'center', color: 'white' }}>Programming Languages</h3>
        <div className="courses-list">
          {programmingCourses.map((c, i) => (
            <div
              className={`course-card${c.primary ? ' primary-course' : ''}`}
              key={c.title}
              style={{ animationDelay: `${i * 0.2 + 0.2}s` }}
            >
              <div className="course-icon">{renderIcon(c)}</div>
              <div className="course-title">{c.title}</div>
              <div className="course-description">{c.description}</div>
              <button className="btn22 border2 btn-primary" onClick={() => setSelected(c)} style={{marginTop: '20px', backgroundColor:'#0d6efd'}}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>&times;</button>
            <div className="modal-icon">{renderIcon(selected)}</div>
            <h3 className="modal-title">{selected.title}</h3>
            <p className="modal-description">{selected.description}</p>
            {selected.title === 'Data Structures & Algorithms (DSA)' && (
              <div style={{marginBottom: '1rem', color: '#ffd600', fontWeight: 500}}>
                <span>Languages: C, C++, JavaScript</span>
              </div>
            )}
            <h4>Curriculum:</h4>
            <ul className="modal-curriculum">
              {selected.curriculum.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses; 