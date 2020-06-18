import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [bookList, dispatch] = useReducer(bookReducer, [], () => {
    const newData = localStorage.getItem('bookList');
    return newData ? JSON.parse(newData) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }, [bookList]);

  return (
    <BookContext.Provider value={{ bookList, dispatch }}>
      { props.children }
    </BookContext.Provider>
  );
}

export default BookContextProvider;
