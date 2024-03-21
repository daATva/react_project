import React, {
  useState,
  useEffect,
  lazy,
  Suspense,
  useMemo,
  useCallback,
} from 'react';
import Modal from 'react-modal';
import EventModal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import './Slider.scss';
import { fetchEvents } from '../../store/actions/action';
import Cookies from 'js-cookie';
import useWindowWidth from '../../utils/useWindowWidth';

const EventItem = React.memo(
  ({ Name, startDate, Image, onItemClick, choice }) => (
    <div className={`event__item ${choice}`} onClick={() => onItemClick(Name)}>
      <img src={Image} alt={Name} />
      <div className="event__text">
        <h4>{Name}</h4>
        <span>{startDate}</span>
      </div>
    </div>
  )
);

const Slider = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const [slidesToShow, setSlidesToShow] = useState(3);

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [choices, setChoices] = useState(() => {
    const cookieChoices = Cookies.get('eventChoices');
    return cookieChoices ? JSON.parse(cookieChoices) : {};
  });

  const handleChoice = useCallback(
    (Name, choiceClass) => {
      const newChoices = { ...choices, [Name]: choiceClass };
      setChoices(newChoices);
      Cookies.set('eventChoices', JSON.stringify(newChoices), { expires: 7 });
      closeModal();
    },
    [choices, closeModal]
  );

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
    (Name) => {
      const event = events.find((e) => e.Name === Name);
      setSelectedEvent(event);
      setModalOpen(true);
    },
    [events]
  );

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedEvent(null);
  }, []);

  const currentEvents = useMemo(
    () => events.slice(currentIndex, currentIndex + slidesToShow),
    [events, currentIndex, slidesToShow]
  );

  return (
    <div className="slider">
      <button onClick={goToPrevious}>&lt;</button>
      <div className="slider__content">
        <Suspense fallback={<div>Загрузка...</div>}>
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
        </Suspense>
      </div>
      <button onClick={goToNext}>&gt;</button>
      <Suspense fallback={<div>Загрузка...</div>}>
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
      </Suspense>
    </div>
  );
};

export default Slider;
