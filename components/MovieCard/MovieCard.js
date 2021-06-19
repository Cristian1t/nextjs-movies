import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StyledCard } from './styles';

function MovieCard({ title, id, image }) {
  return (
    <StyledCard>
      <Link href={`/movielist/${id}`}>
        <a>
          <Image
            src={image}
            alt={title}
            layout="fixed"
            width={170}
            height={200}
          />
          <h3>{title}</h3>
        </a>
      </Link>
    </StyledCard>
  );
}

export default MovieCard;
