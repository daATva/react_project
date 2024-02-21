import React from 'react';
import { useParams } from 'react-router-dom';
import { questions } from '../../data/questions';
import './QuestionDetails.scss';

const QuestionDetails = () => {
  const { id } = useParams();
  const question = questions.find((q) => q.id === parseInt(id));

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div className="question-details">
      <h2>{question.question}</h2>
      <p>{question.answer}</p>
    </div>
  );
};

export default QuestionDetails;