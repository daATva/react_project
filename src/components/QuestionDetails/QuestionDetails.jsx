import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { questions } from '../../data/questions';
import './QuestionDetails.scss';

const QuestionDetails = () => {
  const { id } = useParams();
  const question = questions.find((q) => q.id === parseInt(id));

  if (!question) {
    return <div>Question not found</div>;
  }

  // Создаем состояние для показа ответа
  const [showAnswer, setShowAnswer] = useState(false);

  // Просто заглушки для демонстрации
  const handleKnowClick = () => {
    console.log('Ответ знаю:', question.id);
    // Здесь можно добавить логику для обработки ответа "Знаю"
  };

  const handleDontKnowClick = () => {
    console.log('Ответ не знаю:', question.id);
    // Здесь можно добавить логику для обработки ответа "Не знаю"
  };

  // Изменяем состояние на противоположное при клике на кнопку
  const handleAnswerClick = () => {
    console.log('Посмотреть ответ:', question.id);
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="question-details">
      <h2>{question.question}</h2>
      {/* Показываем параграф с ответом только если showAnswer равно true */}
      {showAnswer && <p>{question.answer}</p>}
      <div> 
        <button className='know-button' onClick={handleKnowClick}>Знаю</button>
        <button className='dont-know-button' onClick={handleDontKnowClick}>Не знаю</button>
        <button className='show-answer-button' onClick={handleAnswerClick}>Посмотреть ответ</button>
      </div>
    </div>
  );
};

export default QuestionDetails;
