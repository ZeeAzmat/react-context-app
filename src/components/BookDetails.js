import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  return (
    <li style={{background: theme.ui }} onClick={() => dispatch( { type: 'REMOVE_BOOK', id: book.id } ) }>
      <div className="id" style={{ color: theme.syntax}}>{ book.id }</div>
      <div className="title" style={{ color: theme.syntax}}>{ book.title }</div>
    </li>
  );
}

export default BookDetails;
