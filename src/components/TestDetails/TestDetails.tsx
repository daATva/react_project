import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TestDetails.scss';
import PageContainer from '../PageContainer/PageContainer';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Test {
  id: number;
  name: string;
  description: string;
  image: string;
  questions: Question[];
}

const TestDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tests, setTests] = useState<Test[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch('https://66410886a7500fcf1a9f6434.mockapi.io/tests_data')
      .then((response) => response.json())
      .then((data) => setTests(data))
      .catch((error) => setErrorMessage(error.message));
  }, []);

  const test = tests.find((test) => test.id === parseInt(id || '0'));

  if (!test) {
    return <p>Тест не найден</p>;
  }

  const handleOptionClick = (optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);

    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      if (answer === test.questions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const handleBackToTests = () => {
    navigate('/test');
  };

  if (showResults) {
    const score = calculateResults();
    return (
      <PageContainer>
        <div className="test-details">
          <h1>{test.name}</h1>
          <img src={test.image} alt={test.name} />
          <p>{test.description}</p>
          <h2>
            Ваш результат: {score} из {test.questions.length}
          </h2>
          <button onClick={handleBackToTests}>Вернуться к тестам</button>
        </div>
      </PageContainer>
    );
  }

  const question = test.questions[currentQuestion];

  return (
    <PageContainer>
      <div className="test-details">
        <h1>{test.name}</h1>
        <img src={test.image} alt={test.name} />
        <p>{test.description}</p>
        <div className="question-section">
          <h2>{question.question}</h2>
          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className={
                  selectedAnswers[currentQuestion] === index ? 'selected' : ''
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default TestDetails;
