// src/store/reducers/courseDataReducer.tsx
import { Reducer } from 'redux';

interface CourseDataState {
  courseData: any[];
  loading: boolean;
  error: Error | null;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: CourseDataState = {
  courseData: [],
  loading: false,
  error: null,
};

const courseDataReducer: Reducer<CourseDataState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'FETCH_COURSE_DATA_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_COURSE_DATA_SUCCESS':
      return { courseData: action.payload, loading: false, error: null };
    case 'FETCH_COURSE_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default courseDataReducer;
