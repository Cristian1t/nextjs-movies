import React from 'react';
import data from '../../assets/films.json';
import StarRating from '../../components/StarRating/StarRating';
import useLocalStorage from '../../hooks/useLocalStorage';

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
    `${movie.imdbVotes.toString().replace(',', '')}`
  );
  const [totalRating, setTotalRating] = useLocalStorage(
    `rating${movie.imdbID}`,
    `${movie.imdbRating === 'N/A' ? 'N/A' : movie.imdbRating / 2}`
  );

  const [stars, setStars] = useLocalStorage(`stars${movie.imdbID}`, 0);

  const [hover, setHover] = useLocalStorage(`hover${movie.imdbID}`, null);
  const [disableClick, setDisableClick] = useLocalStorage(
    `hover${movie.imdbID}`,
    false
  );

  return (
    <div>
      <h1>{movie.Title}</h1>
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
  );
}

export default MovieDetails;
