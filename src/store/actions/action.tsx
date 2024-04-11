import axios, { AxiosError, AxiosResponse } from 'axios';
import { Dispatch } from 'redux';

interface EventAction {
  type: 'FETCH_EVENTS_SUCCESS' | 'FETCH_EVENTS_FAILURE';
  payload?: any;
}

interface CourseAction {
  type:
    | 'FETCH_COURSE_DATA_REQUEST'
    | 'FETCH_COURSE_DATA_SUCCESS'
    | 'FETCH_COURSE_DATA_FAILURE';
  payload?: any;
}

export const fetchEvents = () => async (dispatch: Dispatch<EventAction>) => {
  try {
    const response: AxiosResponse = await axios.get('/api/slider-event');
    dispatch({
      type: 'FETCH_EVENTS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    const axiosError = error as AxiosError;
    dispatch({
      type: 'FETCH_EVENTS_FAILURE',
      payload: axiosError.response?.data || axiosError.message,
    });
  }
};

export const fetchCourseData =
  () => async (dispatch: Dispatch<CourseAction>) => {
    dispatch({ type: 'FETCH_COURSE_DATA_REQUEST' });
    try {
      const response: AxiosResponse = await axios.get('/api/course-data');
      dispatch({
        type: 'FETCH_COURSE_DATA_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      dispatch({
        type: 'FETCH_COURSE_DATA_FAILURE',
        payload: axiosError.response?.data || axiosError.message,
      });
    }
  };
