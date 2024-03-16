// EventModal.jsx
import React from 'react';
import Modal from 'react-modal';
import './Modal.scss';

const EventModal = ({
  isOpen,
  onRequestClose,
  contentLabel,
  Name,
  Image,
  onChoiceMade,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '0px 10px 0px 10px',
        },
        content: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          maxWidth: '90vw',
          maxHeight: '90vh',
          width: '450px',
          height: '900px',
          margin: 'auto',
          borderRadius: '20px',
          position: 'relative',
          border: '0px',
          inset: '0',
        },
      }}
      overlayClassName="modal-overlay"
    >
      <div className="blurred-background">
        <img
          src={Image}
          alt={Name}
          style={{ backgroundSize: '20%', filter: 'blur(15px)' }}
        />
      </div>
      <div className="modal-content">
        <div style={{ textAlign: 'center' }}>
          <img
            src={Image}
            alt={Name}
            style={{
              margin: '50px 0px 0px 0px',
              maxWidth: '70%',
              maxHeight: '100%',
              borderRadius: '15px',
            }}
          />
          <h1>{Name}</h1>
        </div>
        <div className="modal-buttons">
          <button
            className="know-button"
            onClick={() => onChoiceMade('know-button')}
          >
            Пойду
          </button>
          <button
            className="close-button"
            onClick={() => onChoiceMade('close-button')}
          >
            Не пойду
          </button>
          <button
            className="remind-button"
            onClick={() => onChoiceMade('remind-button')}
          >
            Подумаю
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
