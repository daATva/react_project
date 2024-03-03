import React from 'react';
import Form from'../../components/Form/Form';
import './News.scss';

const NewsItem = ({ title, description, date }) => (
  <div className="news__item">
    <h3>{title}</h3>
    <p>{description}</p>
    <span>{date}</span>
  </div>
);

const upcomingEvents = [
  { eventName: "Вебинар по мотивации", eventDate: "15.03.2024" },
  { eventName: "Тренинг по продажам", eventDate: "22.03.2024" },
  { eventName: "Мастер-класс по управлению временем", eventDate: "30.03.2024" },
  { eventName: "Тренинг по скипасу", eventDate: "08.04.2024" },
];

const EventItem = ({ eventName, eventDate }) => (
  <div className="event__item">
    <h4>{eventName}</h4>
    <span>{eventDate}</span>
  </div>
);

const News = () => {
  return (
    <div className="news">
      <h1>Это новости</h1>

      <div className="news__content">
        <div className="news__content__persons">
          <div className="news__group">
            <div className="news__circle">
              <p >Иван Иванов</p>  
            </div>
          </div>
          <div className="news__group">
            <div className="news__circle">
              <p >Иван Иванов</p>  
            </div>
          </div>
          <div className="news__group">
            <div className="news__circle">
              <p >Иван Иванов</p>  
            </div>
          </div>
          <div className="news__group">
            <div className="news__circle">
              <p >Иван Иванов</p>  
            </div>
          </div>
          <div className="news__group">
            <div className="news__circle">
              <p >Иван Иванов</p>  
            </div>
          </div>
        </div>
        <div className="news__course">
        {/* Примеры блоков с новостями */}
        <NewsItem
          title="Новая методика обучения"
          description="Краткое описание новой методики обучения, которая поможет..."
          date="12.03.2023"
        />
        {/* Добавьте другие новости аналогично */}
        </div>
        <div className="news__events__section">
         <h2>Предстоящие мероприятия</h2>
         <div className="news__events__content">
            {upcomingEvents.map((event, index) => (
              <EventItem key={index} eventName={event.eventName} eventDate={event.eventDate} />
            ))}
         </div>
       </div>
      </div>
        
{/* 
      <button>Get Started</button>

      <Form/> */}
    </div>
  );
};

export default News;

