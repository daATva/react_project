const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ANSWER_QUESTION':
        return {
          ...state,
          currentQuestion: action.payload.question,
          isAnswered: true,
          isCorrect: action.payload.isCorrect,
        };
      case 'ADD_TO_FAVORITES':
        return {
          ...state,
          favorites: [...state.favorites, action.payload.question],
        };
      default:
        return state;
    }
  };

  export default favoritesReducer;