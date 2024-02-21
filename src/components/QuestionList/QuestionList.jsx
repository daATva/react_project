import React from 'react';
import { Link } from 'react-router-dom';
import { questions } from '../../data/questions';
import './QuestionList.scss';

const QuestionList = () => {
  return (
    <div className="question-list">
      <h2>Frontend Interview Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Link to={`/interview/${question.id}`}>{question.question}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;