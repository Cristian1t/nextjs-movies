import React from 'react';
import Link from 'next/link';

function MovieCard({ title, id }) {
  return (
    <div>
      <Link href={`/movielist/${id}`}>
        <a>
          <h3>{title}</h3>
        </a>
      </Link>
    </div>
  );
}

export default MovieCard;
