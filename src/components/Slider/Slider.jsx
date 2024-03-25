import React, { useState, useEffect, useCallback } from 'react';
import Modal from 'react-modal';
import EventModal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import './Slider.scss';
import { fetchEvents } from '../../store/actions/action';
import Cookies from 'js-cookie';
import useWindowWidth from '../../utils/useWindowWidth';

// Компонент EventItem отрисовывает один элемент события
const EventItem = React.memo(
  ({ Name, startDate, Image, onItemClick, choice }) => (
    <div className={`event__item ${choice}`} onClick={() => onItemClick(Name)}>
      <img src={Image} alt={Name} loading="lazy" />
      <div className="event__text">
        <h4>{Name}</h4>
        <span>{startDate}</span>
      </div>
    </div>
  )
);

// Компонент Slider обрабатывает основную логику
const Slider = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const windowWidth = useWindowWidth();

  // Загружаем события при монтировании компонента
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [choices, setChoices] = useState(() => {
    const cookieChoices = Cookies.get('eventChoices');
    return cookieChoices ? JSON.parse(cookieChoices) : {};
  });

  // Закрываем модальное окно и сбрасываем выбранное событие
  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedEvent(null);
  }, []);

  // Обрабатываем выбор пользователя для события
  const handleChoice = useCallback(
    (Name, choiceClass) => {
      const newChoices = { ...choices, [Name]: choiceClass };
      setChoices(newChoices);
      Cookies.set('eventChoices', JSON.stringify(newChoices), { expires: 7 });
      closeModal();
    },
    [choices, closeModal]
  );

  // Устанавливаем количество слайдов для показа в зависимости от ширины окна
  useEffect(() => {
    if (windowWidth < 1300) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
    if (windowWidth < 761) {
      setSlidesToShow(1);
    }
  }, [windowWidth]);

  // Очищаем cookie выбора событий каждую минуту
  useEffect(() => {
    Modal.setAppElement('#root');
    const clearCookies = () => {
      Cookies.remove('eventChoices');
      setChoices({});
    };

    const intervalId = setInterval(clearCookies, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Переходим к предыдущему слайду
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? events.length - slidesToShow : prevIndex - 1
    );
  }, [events.length, slidesToShow]);

  // Переходим к следующему слайду
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > events.length - slidesToShow ? 0 : prevIndex + 1
    );
  }, [events.length, slidesToShow]);

  // Открываем модальное окно для выбранного события
  const openModal = useCallback(
    (Name) => {
      const event = events.find((e) => e.Name === Name);
      setSelectedEvent(event);
      setModalOpen(true);
    },
    [events]
  );

  const currentEvents = events.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <div className="slider">
      <button onClick={goToPrevious}>&lt;</button>
      <div className="slider__content">
        {currentEvents.map((event, index) => (
          <EventItem
            key={index}
            Name={event.Name}
            startDate={event.startDate}
            Image={event.Image}
            onItemClick={openModal}
            choice={choices[event.Name]}
          />
        ))}
      </div>
      <button onClick={goToNext}>&gt;</button>
      {selectedEvent && (
        <EventModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Event Modal"
          Name={selectedEvent.Name}
          Image={selectedEvent.Image}
          onChoiceMade={(choiceClass) => {
            const classMap = {
              'know-button': 'know',
              'close-button': 'dont-know',
              'remind-button': 'remind',
            };
            handleChoice(selectedEvent.Name, classMap[choiceClass]);
          }}
        />
      )}
    </div>
  );
};

export default Slider;
