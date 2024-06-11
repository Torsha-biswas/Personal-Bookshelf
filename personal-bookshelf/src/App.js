// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';
import SearchIcon from '@mui/icons-material/Search';
import BookshelfIcon from '@mui/icons-material/LibraryBooks';
import './Styles.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    if (!bookshelf.find((b) => b.key === book.key)) {
      const newBookshelf = [...bookshelf, book];
      setBookshelf(newBookshelf);
      localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">
            <SearchIcon />
            Search
          </Link>
          <Link to="/bookshelf">
            <BookshelfIcon />
            My Bookshelf
          </Link>
        </nav>
        <header>
          <h1>Personal Bookshelf</h1>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<BookSearch addToBookshelf={addToBookshelf} />} />
            <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
