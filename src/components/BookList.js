import BookDetails from './BookDetails';
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { bookList } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  return bookList.length ? (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
      <ul>
        { bookList.map((book) => {
          return ( <BookDetails book={book} key={book.id} /> );
          // return <li key={book.id} style={{background: theme.ui }}>{book.title}</li>
        })}
      </ul>
    </div>
  ) : (<div className="empty">No book to read. Hello free time. </div>);
}

export default BookList;
