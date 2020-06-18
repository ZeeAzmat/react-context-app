import { v4 as uuidv4 } from 'uuid';

let newState = [];

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      newState = [{ title: action.book.title, id: uuidv4() }, ...state];
      localStorage.setItem('bookList', JSON.stringify(newState));
      return newState;
    case 'REMOVE_BOOK':
      newState = state.filter((book) => book.id !== action.id);
      localStorage.setItem('bookList', JSON.stringify(newState));
      return newState;
    default:
      newState = JSON.parse(localStorage.getItem('bookList'));
      return newState;
  }
};