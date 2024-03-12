// Slider.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import EventModal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import './Slider.scss';
import { fetchEvents } from '../../store/actions/action';
import Cookies from 'js-cookie'; // Ensure js-cookie is installed

const EventItem = ({
  eventName,
  eventDate,
  eventImage,
  onItemClick,
  choice,
}) => (
  <div
    className={`event__item ${choice}`}
    onClick={() => onItemClick(eventName)}
  >
    <img src={eventImage} alt={eventName} />
    <div className="event__text">
      <h4>{eventName}</h4>
      <span>{eventDate}</span>
    </div>
  </div>
);

const Slider = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const slidesToShow = 3; // Define the slidesToShow variable

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [choices, setChoices] = useState(() => {
    const cookieChoices = Cookies.get('eventChoices');
    return cookieChoices ? JSON.parse(cookieChoices) : {};
  });

  const handleChoice = (eventName, choiceClass) => {
    const newChoices = { ...choices, [eventName]: choiceClass };
    setChoices(newChoices);
    Cookies.set('eventChoices', JSON.stringify(newChoices), { expires: 7 });
    closeModal();
  };

  useEffect(() => {
    Modal.setAppElement('#root');
    const clearCookies = () => {
      Cookies.remove('eventChoices');
      setChoices({});
    };

    // Устанавливаем интервал для очистки куки каждую минуту
    const intervalId = setInterval(clearCookies, 60000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? events.length - slidesToShow : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > events.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const openModal = (eventName) => {
    const event = events.find((e) => e.eventName === eventName);
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const currentEvents = events.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <div className="slider">
      <button onClick={goToPrevious}>&lt;</button>
      <div className="slider__content">
        {currentEvents.map((event, index) => (
          <EventItem
            key={index}
            eventName={event.eventName}
            eventDate={event.eventDate}
            eventImage={event.eventImage}
            onItemClick={openModal}
            choice={choices[event.eventName]}
          />
        ))}
      </div>
      <button onClick={goToNext}>&gt;</button>
      {selectedEvent && (
        <EventModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Event Modal"
          eventName={selectedEvent.eventName}
          eventImage={selectedEvent.eventImage}
          onChoiceMade={(choiceClass) => {
            const classMap = {
              'know-button': 'know',
              'close-button': 'dont-know',
              'remind-button': 'remind',
            };
            handleChoice(selectedEvent.eventName, classMap[choiceClass]);
          }}
        />
      )}
    </div>
  );
};

export default Slider;
