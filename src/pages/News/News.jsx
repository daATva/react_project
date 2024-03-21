import React, { Suspense, lazy } from 'react';
import Slider from '../../components/Slider/Slider';
import './News.scss';
import Form from '../../components/Form/Form';
// import { upcomingEvents } from '../../data/upcomingEvents.js';

const NewsItem = ({ title, description, date }) => (
  <div className="news__item">
    <h3>{title}</h3>
    <p>{description}</p>
    <span>{date}</span>
  </div>
);
const SliderLoading = lazy(() => import('./../../components/Slider/Slider'));
const News = () => {
  return (
    <div className="news">
      <h2>Сотрудники месяца</h2>

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
            <Suspense fallback={<div>Загрузка слайдера...</div>}>
              <SliderLoading />
            </Suspense>
          </div>
        </div>
      </div>
      <h3>Предложить мероприятие</h3>
      <Form />
    </div>
  );
};

export default News;
