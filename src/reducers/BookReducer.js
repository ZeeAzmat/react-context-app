import { v4 as uuidv4 } from 'uuid';

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [{ title: action.book.title, id: uuidv4() }, ...state];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
