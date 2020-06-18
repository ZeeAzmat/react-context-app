import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeToggle from './components/ThemeToggle';
import BookContextProvider from './contexts/BookContext';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>

          <BookContextProvider>
            <Navbar />
            <BookList />
          </BookContextProvider>

          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
