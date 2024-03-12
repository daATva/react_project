// src/store/actions/action.jsx
import axios from 'axios';

// Асинхронное действие для получения данных событий
export const fetchEvents = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://65ede50f08706c584d9ad460.mockapi.io/slider-event/slider__event'
    );
    dispatch({
      type: 'FETCH_EVENTS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_EVENTS_FAILURE',
      payload: error,
    });
  }
};

export const fetchCourseData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://65ede50f08706c584d9ad460.mockapi.io/slider-event/cour__data'
    );
    dispatch({
      type: 'FETCH_COURSE_DATA_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_COURSE_DATA_FAILURE',
      payload: error,
    });
  }
};
