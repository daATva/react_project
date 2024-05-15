import axios, { AxiosError, AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

export interface EventAction {
  type:
    | 'FETCH_EVENTS_REQUEST'
    | 'FETCH_EVENTS_SUCCESS'
    | 'FETCH_EVENTS_FAILURE';
  payload?: any;
}

interface CourseAction {
  type:
    | 'FETCH_COURSE_DATA_REQUEST'
    | 'FETCH_COURSE_DATA_SUCCESS'
    | 'FETCH_COURSE_DATA_FAILURE';
  payload?: any;
}

type State = any;
type ThunkResult<R> = ThunkAction<R, State, undefined, EventAction>;

export const fetchEvents =
  (): ThunkResult<Promise<void>> => async (dispatch: Dispatch) => {
    dispatch({ type: 'FETCH_EVENTS_REQUEST' });

    try {
      const response: AxiosResponse = await axios.get('/api/slider-event');
      dispatch({
        type: 'FETCH_EVENTS_SUCCESS',
        payload: response.data,
      });
    } catch (error: unknown) {
      const e = error as Error;
      dispatch({
        type: 'FETCH_EVENTS_FAILURE',
        payload: e.message,
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
