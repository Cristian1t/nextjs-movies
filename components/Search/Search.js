import Link from 'next/link';
import React, { useState } from 'react';
import data from '../../assets/films.json';
import MovieCard from '../MovieCard/MovieCard';

function Search() {
  const [searchName, setSearchName] = useState('');
  console.log(searchName);
  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearchName(event.target.value)}
      />
      <div>
        {data
          .filter((val) => {
            if (searchName === '') {
              return val;
            } else if (
              val.Title.toLowerCase().includes(searchName.toLowerCase())
            ) {
              return val;
            }
          })
          .map((movie, index) => (
            <Link href={`/movielist/${index}`} key={movie.imdbID}>
              <a>
                <MovieCard title={movie.Title} />
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Search;
