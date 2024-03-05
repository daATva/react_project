// Действия для добавления и удаления избранных вопросов
export const addFavorite = (id) => ({
  type: 'ADD_FAVORITE',
  payload: id,
});

export const removeFavorite = (id) => ({
  type: 'REMOVE_FAVORITE',
  payload: id,
});
