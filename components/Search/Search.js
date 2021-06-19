import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';

function Search({ movies }) {
  const [searchName, setSearchName] = useState('');
  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearchName(event.target.value)}
      />
      <div>
        {movies
          .filter((val) => {
            if (searchName === '') {
              return val;
            } else if (
              val.Title.toLowerCase().includes(searchName.toLowerCase())
            ) {
              return val;
            }
          })
          .map((movie) => (
            <MovieCard
              title={movie.Title}
              key={movie.imdbID}
              id={movie.imdbID}
            />
          ))}
      </div>
    </div>
  );
}

export default Search;
