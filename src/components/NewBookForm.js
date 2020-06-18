import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const NewBookForm = () => {
  const [ title, setTitle ] = useState('');
  const { addBook } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;
  const colorScheme = { background: theme.bg, color: theme.syntax };

  const addBookHandler = (e) => {
    e.preventDefault();
    setTitle('');
    addBook(title);
  }

  return (
    <form onSubmit={ addBookHandler }>
      <input
        required
        type="text"
        value={ title }
        style={ colorScheme }
        placeholder="Book name"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input type="submit" value="Add New Book" style={ colorScheme } />
    </form>
  );
}

export default NewBookForm;
