// EventModal.jsx

import React from 'react';
import Modal from 'react-modal';
import './Modal.scss';

const EventModal = ({
  isOpen,
  onRequestClose,
  contentLabel,
  eventName,
  eventImage,
  onConfirm,
  onDecline,
  onThink,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={{
        content: {
          maxWidth: '600px',
          margin: 'auto',
          borderRadius: '20px',
          maxHeight: '700px',
          background: `url(${eventImage})`,
          backgroundSize: 'cover',
          backdropFilter: 'blur(8px)',
          position: 'relative', // Добавляем для возможности использования абсолютного позиционирования внутри
        },
      }}
      overlayClassName="modal-overlay"
    >
      <div style={{ textAlign: 'center' }}>
        <h3>{eventName}</h3>
        <img
          src={eventImage}
          alt={eventName}
          style={{ maxWidth: '100px', borderRadius: '10px' }}
        />
      </div>
      <div className="modal-buttons">
        <button className="know-button" onClick={onConfirm}>
          Знаю
        </button>
        <button className="close-button" onClick={onDecline}>
          Не знаю
        </button>
        <button className="remind-button" onClick={onThink}>
          Подумаю
        </button>
      </div>
    </Modal>
  );
};

export default EventModal;
