import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <p>Movie Length : {movies.length} </p>
    </div>
  );
};

export default Nav;
