import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { questions } from '../../data/questions';
import './QuestionList.scss';
import Modal from 'react-modal';

const QuestionList = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    Modal.setAppElement('#root'); // Устанавливаем элемент приложения для react-modal
  }, []);

  function openModal(question) {
    setSelectedQuestion(question);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [showAnswer, setShowAnswer] = useState(false);

  const handleKnowClick = () => {
    console.log('Ответ знаю:', selectedQuestion.id);
    // Здесь можно добавить логику для обработки ответа "Знаю"
  };

  const handleDontKnowClick = () => {
    console.log('Ответ не знаю:', selectedQuestion.id);
    // Здесь можно добавить логику для обработки ответа "Не знаю"
  };

  const handleAnswerClick = () => {
    console.log('Посмотреть ответ:', selectedQuestion.id);
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="question-list">
      <h2>Frontend Interview Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Link onClick={() => openModal(question)}>{question.question}</Link>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Question Details"
        style={{ content: { maxWidth: '700px', margin: '0 auto' } }}
      >
        <h2>{selectedQuestion?.question}</h2>
        {showAnswer && <p>{selectedQuestion?.answer}</p>}
        <div className="question-buttons">
          <button className="show-answer-button" onClick={handleAnswerClick}>
            Посмотреть ответ
          </button>
          <button className="close-button" onClick={closeModal}>
            Закрыть
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default QuestionList;