// CoursesSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CoursesSection.scss';

const CoursesSection = ({ courseData, loading }) => {
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    navigate(`/courses/${course.id}`, { state: course });
  };

  const coursesData = courseData || courses;

  return (
    <div className="courses-section">
      <h2 className="courses-section__title">Обучающие курсы</h2>
      <div className="courses-section__list">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="course-card"
            onClick={() => handleCourseClick(course)}
          >
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
