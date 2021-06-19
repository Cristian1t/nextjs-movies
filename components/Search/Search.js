import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { StyledSearch } from './styles';

function Search({ movies }) {
  const [searchName, setSearchName] = useState('');
  return (
    <StyledSearch>
      <div className="topdiv">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearchName(event.target.value)}
        />
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Restart application
        </button>
      </div>
      <div className="cardarea">
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
              image={movie.Poster}
            />
          ))}
      </div>
    </StyledSearch>
  );
}

export default Search;
