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

  // Просто заглушки для демонстрации
  const handleKnowClick = () => {
    console.log('Ответ знаю:', question.id);
    // Здесь можно добавить логику для обработки ответа "Знаю"
  };

  const handleDontKnowClick = () => {
    console.log('Ответ не знаю:', question.id);
    // Здесь можно добавить логику для обработки ответа "Не знаю"
  };

  const handleAnswerClick = () => {
    console.log('Ответ не знаю:', question.id);
    // Здесь можно добавить логику для обработки ответа "Не знаю"
  };

  return (
    <div className="question-details">
      <h2>{question.question}</h2>
      <p>{question.answer}</p>
      <div>
        <button onClick={handleKnowClick}>Знаю</button>
        <button onClick={handleDontKnowClick}>Не знаю</button>
        <button onClick={handleAnswerClick}>Посмотреть ответ</button>
      </div>
    </div>
  );
};

export default QuestionDetails;