import React, { useState, useEffect, useCallback } from 'react';
import Modal from 'react-modal';
import EventModal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import './Slider.scss';
import { fetchEvents, EventAction } from '../../store/actions/action';
import Cookies from 'js-cookie';
import useWindowWidth from '../Hooks/useWindowWidth';

interface Event {
  Name: string;
  startDate: string;
  Image: string;
}

interface EventItemProps {
  Name: string;
  startDate: string;
  Image: string;
  onItemClick: (name: string) => void;
  choice: string;
}

const EventItem: React.FC<EventItemProps> = ({
  Name,
  startDate,
  Image,
  onItemClick,
  choice,
}) => (
  <div className={`event__item ${choice}`} onClick={() => onItemClick(Name)}>
    <img src={Image} alt={Name} loading="lazy" />
    <div className="event__text">
      <h4>{Name}</h4>
      <span>{startDate}</span>
    </div>
  </div>
);

interface State {
  events: {
    events: Event[];
  };
}
const Slider: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<State, any, AnyAction>>();
  const events = useSelector<State, Event[]>((state) => state.events.events);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const [slidesToShow, setSlidesToShow] = useState<number>(3);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [choices, setChoices] = useState<{ [key: string]: string }>(() => {
    const cookieChoices = Cookies.get('eventChoices');
    return cookieChoices ? JSON.parse(cookieChoices) : {};
  });

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedEvent(null);
  }, []);

  const handleChoice = useCallback(
    (Name: string, choiceClass: string) => {
      const newChoices = { ...choices, [Name]: choiceClass };
      setChoices(newChoices);
      Cookies.set('eventChoices', JSON.stringify(newChoices), { expires: 7 });
      closeModal();
    },
    [choices, closeModal]
  );

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

  useEffect(() => {
    Modal.setAppElement('#root');
    const clearCookies = () => {
      Cookies.remove('eventChoices');
      setChoices({});
    };

    const intervalId = setInterval(clearCookies, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? events.length - slidesToShow : prevIndex - 1
    );
  }, [events.length, slidesToShow]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > events.length - slidesToShow ? 0 : prevIndex + 1
    );
  }, [events.length, slidesToShow]);

  const openModal = useCallback(
    (Name: string) => {
      const event = events.find((e) => e.Name === Name);
      if (event !== undefined) {
        setSelectedEvent(event);
        setModalOpen(true);
      }
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
