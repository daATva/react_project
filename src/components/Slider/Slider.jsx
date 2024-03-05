import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Slider.scss';

const EventItem = ({ eventName, eventDate, onItemClick }) => (
  <div className="event__item" onClick={() => onItemClick(eventName)}>
    <h4>{eventName}</h4>
    <span>{eventDate}</span>
  </div>
);

const Slider = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const slidesToShow = 4;

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

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
    const selectedEvent = events.find((event) => event.eventName === eventName);
    setSelectedEvent(selectedEvent);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const handleKnowClick = () => {
    console.log(`Знаю: ${selectedEvent.eventName}`);
    closeModal();
  };

  const handleDontKnowClick = () => {
    console.log(`Не знаю: ${selectedEvent.eventName}`);
    closeModal();
  };

  const handleThinkClick = () => {
    console.log(`Подумаю: ${selectedEvent.eventName}`);
    closeModal();
  };

  const endIndex =
    currentIndex + slidesToShow >= events.length
      ? events.length
      : currentIndex + slidesToShow;
  const currentEvents = events.slice(currentIndex, endIndex);

  while (currentEvents.length < slidesToShow) {
    currentEvents.push(...events.slice(0, slidesToShow - currentEvents.length));
  }

  return (
    <div className="slider">
      <button onClick={goToPrevious}>&lt;</button>
      <div className="slider__content">
        {currentEvents.map((event, index) => (
          <EventItem
            key={index}
            eventName={event.eventName}
            eventDate={event.eventDate}
            onItemClick={openModal}
          />
        ))}
      </div>
      <button onClick={goToNext}>&gt;</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Event Details"
        style={{ content: { maxWidth: '400px', margin: '0 auto' } }}
      >
        <h3>{selectedEvent?.eventName}</h3>
        <div className="modal-buttons">
          <button onClick={handleKnowClick}>Знаю</button>
          <button onClick={handleDontKnowClick}>Не знаю</button>
          <button onClick={handleThinkClick}>Подумаю</button>
        </div>
      </Modal>
    </div>
  );
};

export default Slider;