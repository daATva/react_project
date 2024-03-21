import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './CourseDetails.scss';

const CourseDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const course = state || {};
  return (
    <div className="course__group">
      <h1>{course.title}</h1>
      <p>Описание курса</p>
      <p>{course.description}</p>
      <p>Источники:</p>
      <ul>
        {course.sources.map((source, index) => (
          <li key={index}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.title}
            </a>
          </li>
        ))}
      </ul>
      <p>Длительность курса: {course.duration}</p>
      <p>Методы обучения:</p>
      <ul>
        {course.learningMethods.map((method, index) => (
          <li key={index}>{method}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
