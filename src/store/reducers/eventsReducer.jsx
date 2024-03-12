// src/store/reducers/eventsReducer.js
const initialState = {
  events: [],
  loading: false,
  error: null,
  courseData: [],
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_EVENTS_SUCCESS':
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_COURSE_DATA_SUCCESS':
      return {
        ...state,
        courseData: action.payload,
      };
    case 'FETCH_EVENTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
