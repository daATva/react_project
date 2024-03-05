import React from 'react';
import Form from '../../components/Form/Form';
import Slider from '../../components/Slider/Slider';
import './News.scss';

const NewsItem = ({ title, description, date }) => (
  <div className="news__item">
    <h3>{title}</h3>
    <p>{description}</p>
    <span>{date}</span>
  </div>
);

const upcomingEvents = [
  { eventName: 'Вебинар по мотивации', eventDate: '15.03.2024' },
  { eventName: 'Тренинг по продажам', eventDate: '22.03.2024' },
  { eventName: 'Мастер-класс по управлению временем', eventDate: '30.03.2024' },
  { eventName: 'Тренинг по скипасу', eventDate: '08.04.2024' },
  { eventName: 'Тренировка в зале', eventDate: '21.04.2024' },
  { eventName: 'Прокачка софт скиллов в команде', eventDate: '30.04.2024' },
];

const News = () => {
  return (
    <div className="news">
      <h1>Это новости</h1>

      <div className="news__content">
        <div className="news__content__persons">
          <div className="news__group">
            <div className="news__circle">
              <p>Иван Иванов</p>
            </div>
          </div>
          <div className="news__group">
            <div className="news__circle">
              <p>Иван Иванов</p>
            </div>
          </div>
          <div className="news__group">
            <div className="news__circle">
              <p>Иван Иванов</p>
            </div>
          </div>
          <div className="news__group">
            <div className="news__circle">
              <p>Иван Иванов</p>
            </div>
          </div>
          <div className="news__group">
            <div className="news__circle">
              <p>Иван Иванов</p>
            </div>
          </div>
        </div>
        <div className="news__course">
          <NewsItem
            title="Новая методика обучения"
            description="Краткое описание новой методики обучения, которая поможет..."
            date="12.03.2023"
          />
        </div>
        <div className="news__events__section">
          <h2>Предстоящие мероприятия</h2>
          <div className="news__events__content">
            <Slider events={upcomingEvents} />
          </div>
        </div>
      </div>

      {/* <button>Get Started</button> */}

      <Form />
    </div>
  );
};

export default News;
