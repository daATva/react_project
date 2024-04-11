// src/store/reducers/eventsReducer.tsx
import { Reducer } from 'redux';

interface EventsState {
  events: any[];
  loading: boolean;
  error: Error | null;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: EventsState = {
  events: [],
  loading: false,
  error: null,
};

const eventsReducer: Reducer<EventsState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'FETCH_EVENTS_SUCCESS':
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: null,
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
};

export default eventsReducer;
