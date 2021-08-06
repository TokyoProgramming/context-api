import React, { createContext, useContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: 'Game of Thrones',
      price: '$10',
    },
    {
      id: 2,
      name: 'Harry Potters',
      price: '$20',
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
