import React, { useEffect, useState } from 'react';
import data from '../../assets/films.json';
import StarRating from '../../components/StarRating/StarRating';
import useLocalStorage from '../../hooks/useLocalStorage';
import { StyledMovie } from './styles';

import Image from 'next/image';

export async function getStaticPaths() {
  const paths = data.map((movie) => ({
    params: { imdbID: movie.imdbID },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const movies = data.filter((m) => m.imdbID === params.imdbID);
  return {
    props: { movie: movies[0] },
  };
}

function MovieDetails({ movie }) {
  const [voteCounter, setVoteCounter] = useLocalStorage(
    `votes${movie.imdbID}`,
    `${movie.imdbVotes}`
  );
  const [totalRating, setTotalRating] = useLocalStorage(
    `rating${movie.imdbID}`,
    `${movie.imdbRating === 'N/A' ? 'N/A' : movie.imdbRating / 2}`
  );

  const [stars, setStars] = useLocalStorage(`stars${movie.imdbID}`, 0);

  const [hover, setHover] = useState(null);
  const [disableClick, setDisableClick] = useState(false);

  useEffect(() => {
    setDisableClick(stars !== 0 ? true : false);
    setHover(stars !== 0 ? stars : null);
  }, [stars]);

  return (
    <StyledMovie>
      <div className="maininfo">
        <h1>{movie.Title}</h1>
        <Image
          src={movie.Poster}
          alt={movie.title}
          layout="fixed"
          width={160}
          height={200}
        />
      </div>
      <div className="ratings">
        <h2>Your rating: {stars}</h2>
        <StarRating
          voteCounter={voteCounter}
          setVoteCounter={setVoteCounter}
          stars={stars}
          setStars={setStars}
          hover={hover}
          setHover={setHover}
          disableClick={disableClick}
          setDisableClick={setDisableClick}
        />
        <h2>Total rating is {totalRating === 'N/A' ? 'N/A' : totalRating}</h2>
        <h2>Votes: {voteCounter}</h2>
      </div>
      <div className="otherinfo">
        <h2>Plot: {movie.Plot}</h2>
        <h3>Year: {movie.Year}</h3>
        <h3>Released: {movie.Released}</h3>
        <h3>Genre: {movie.Genre}</h3>
        <h3>Director: {movie.Director}</h3>
        <h3>Writer: {movie.Writer}</h3>
        <h3>Actors: {movie.Actors}</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {movie.Images.map((item, index) => {
            return (
              <Image
                src={item}
                key={index}
                alt={index}
                layout="fixed"
                width={250}
                height={200}
              />
            );
          })}
        </div>
      </div>
    </StyledMovie>
  );
}

export default MovieDetails;
