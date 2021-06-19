import React from 'react';
import Search from '../../components/Search/Search';
import data from '../../assets/films.json';

export async function getStaticProps(context) {
  return {
    props: { movies: data }, // will be passed to the page component as props
  };
}

function Movies({ movies }) {
  return <Search movies={movies} />;
}

export default Movies;
