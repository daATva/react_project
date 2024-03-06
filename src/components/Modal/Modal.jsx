import React from 'react';
import Modal from 'react-modal';
import './Modal.scss';

const EventModal = ({
  isOpen,
  onRequestClose,
  contentLabel,
  style,
  eventName,
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
          maxWidth: '500px',
          margin: 'auto auto',
          borderRadius: 20,
          maxHeight: '700px',
        },
      }}
    >
      <h3>{eventName}</h3>
      <div className="modal-buttons">
        <button onClick={onConfirm}>Знаю</button>
        <button onClick={onDecline}>Не знаю</button>
        <button onClick={onThink}>Подумаю</button>
      </div>
    </Modal>
  );
};

export default EventModal;
