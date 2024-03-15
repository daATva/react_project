// src/store/reducers/courseDataReducer.js
const initialState = {
  courseData: [],
  loading: false,
  error: null,
};

export default function courseDataReducer(state = initialState, action) {
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
}
