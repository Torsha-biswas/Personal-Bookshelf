// src/components/Bookshelf.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


const Bookshelf = ({ bookshelf }) => {
  return (
    <div>
      {bookshelf.map((book, index) => (
        <Card key={index} className="card">
          <CardContent>
            <Typography variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Bookshelf;
