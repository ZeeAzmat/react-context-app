import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { bookList } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav className='navbar' style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Book Reading List</h1>
      <p>Currently you have {bookList.length} books.</p>

      <div onClick={toggleAuth}>
        { isAuthenticated ? 'Logged In' : 'Logged Out' }
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
