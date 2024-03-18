// src/store/actions/action.jsx
import axios from 'axios';

export const fetchEvents = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/slider-event');
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
  dispatch({ type: 'FETCH_COURSE_DATA_REQUEST' });
  try {
    const response = await axios.get('/api/course-data');
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
