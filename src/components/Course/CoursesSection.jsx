// CoursesSection.jsx
import React from 'react';
import './CoursesSection.scss';

// Можно создать файл с компонентом CourseCard или добавить его прямо здесь
const CourseCard = ({ title, passedCount, totalCount, image }) => {
  const progress = `${passedCount} из ${totalCount} сотрудников прошли курс`;
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-card__image" />
      <div className="course-card__details">
        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__progress">{progress}</p>
      </div>
    </div>
  );
};

const CoursesSection = ({ courses }) => {
  return (
    <div className="courses-section">
      <h2 className="courses-section__title">Обучающие курсы</h2>
      <div className="courses-section__list">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
