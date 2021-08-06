import React from 'react';

const Movie = ({ name, price }) => {
  return (
    <div>
      <h3>{name} </h3>
      <h1>{price} </h1>
    </div>
  );
};

export default Movie;
