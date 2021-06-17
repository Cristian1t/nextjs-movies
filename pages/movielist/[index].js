import React from 'react';
import data from '../../assets/films.json';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Details = () => {
  const router = useRouter();
  const { index } = router.query;
  const movie = data[index];
  return (
    <div>
      <p>Title: {movie.Title}</p>
      <div>Year: {movie.Year}</div>
      <div>Rated: {movie.Rated}</div>
      <div>Released: {movie.Released}</div>
      <div>Genre: {movie.Genre}</div>
      <div>Director: {movie.Director}</div>
      <div>Writer: {movie.Writer}</div>
      <div>Actors: {movie.Actors}</div>
      <div>Plot: {movie.Plot}</div>
      <div>Language: {movie.Language}</div>
      <div>Country: {movie.Country}</div>
      <div>Awards: {movie.Awards}</div>
      <div>Metascore: {movie.Metascore}</div>
      <div>imdbRating: {movie.imdbRating}</div>
      <div>imdbVotes: {movie.imdbVotes}</div>
      <div>imdbID: {movie.imdbID}</div>
      <div>Type: {movie.Type}</div>
      <div>Response: {movie.Response}</div>
      <div>
        Images:
        {movie.Images.map((image) => (
          <div>
            <Image
              src={image}
              alt="image"
              width={500}
              height={500}
              layout="fixed"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
