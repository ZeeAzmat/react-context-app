import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [bookList, setBookList] = useState([
    { title: "The way of king", id: uuidv4() },
    { title: "The name of the wind", id: uuidv4() },
    { title: "The final empire", id: uuidv4() },
    { title: "Dogfight", id: uuidv4() },
    { title: "Rich Dad Poor Dad", id: uuidv4() },
  ]);

  return (
    <BookContext.Provider value={{ bookList }}>
      { props.children }
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;