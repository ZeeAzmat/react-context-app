import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [bookList, dispatch] = useReducer(bookReducer, JSON.parse(localStorage.getItem('bookList')) || []);

  return (
    <BookContext.Provider value={{ bookList, dispatch }}>
      { props.children }
    </BookContext.Provider>
  );
}

export default BookContextProvider;
