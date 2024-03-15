// src/components/Course/CoursesSection.jsx
import React from 'react';
import './CoursesSection.scss';

const CoursesSection = ({ courseData, loading }) => {
  if (loading || !courseData) {
    return <div>Loading...</div>;
  }

  const courses = courseData || [];

  return (
    <div className="courses-section">
      <h2 className="courses-section__title">Обучающие курсы</h2>
      <div className="courses-section__list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>
              Пройдено: {course.passedCount} из {course.totalCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
