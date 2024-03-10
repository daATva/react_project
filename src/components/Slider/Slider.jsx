import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import EventModal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import './Slider.scss';
import { fetchEvents } from '../../store/actions/action';

const EventItem = ({ eventName, eventDate, eventImage, onItemClick }) => (
  <div className="event__item" onClick={() => onItemClick(eventName)}>
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

  // Исправлено: Получаем состояние events из Redux store и обеспечиваем его актуализацию.

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const slidesToShow = 3;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= events.length ? 0 : prevIndex + 1
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

  // Исправлено: Подсчет текущих событий для отображения с учетом текущего индекса и количества слайдов.
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
          />
        ))}
      </div>
      <button onClick={goToNext}>&gt;</button>
      <EventModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        eventName={selectedEvent?.eventName}
        eventImage={selectedEvent?.eventImage}
        onConfirm={() => closeModal()}
        onDecline={() => closeModal()}
        onThink={() => closeModal()}
      />
    </div>
  );
};

export default Slider;
