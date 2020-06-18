import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeToggle from './components/ThemeToggle';
import BookContextProvider from './contexts/BookContext';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';
import NewBookForm from './components/NewBookForm';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>

          <BookContextProvider>
            <Navbar />
            <ThemeToggle />

            <NewBookForm />
            <BookList />
          </BookContextProvider>

        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
