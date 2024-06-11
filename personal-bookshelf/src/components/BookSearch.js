// src/components/BookSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    setQuery(event.target.value);
    if (event.target.value.length > 2) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${event.target.value}&limit=10&page=1`);
      setResults(response.data.docs);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for a book..."
          className="search-input"
        />
        <button className="search-button">
          <SearchIcon />
        </button>
      </div>
      <div>
        {results.map((book) => (
          <Card key={book.key} className="card">
            <CardContent>
              <Typography variant="h5" component="div">
                {book.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              className="add-button"
              onClick={() => addToBookshelf(book)}
            >
              Add to Bookshelf
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
