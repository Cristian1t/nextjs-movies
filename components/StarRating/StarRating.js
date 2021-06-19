import React, { useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import styled from 'styled-components';
import useLocalStorage from '../../hooks/useLocalStorage';

const StyledStarRating = styled.div`
  input[type='radio'] {
    display: none;
  }
  .star {
    cursor: pointer;
    transition: color 200ms;
  }
  .disableclick {
    pointer-events: none;
    opacity: 0.5;
  }
`;

function StarRating({
  setVoteCounter,
  voteCounter,
  stars,
  setStars,
  hover,
  setHover,
  disableClick,
  setDisableClick,
}) {
  return (
    <StyledStarRating>
      {[...Array(5)].map((star, index) => {
        const rating = index + 1;

        const handleClick = () => {
          setStars(rating);
          setDisableClick(true);
          setVoteCounter(parseFloat(voteCounter.replaceAll(',', '')) + 1);
        };

        return (
          <label
            key={index}
            className={
              voteCounter === 'N/A' || disableClick ? 'disableclick' : 'label'
            }
          >
            <input type="radio" name="rating" onClick={handleClick} />
            <AiTwotoneStar
              className="star"
              size={50}
              color={rating <= (hover || stars) ? 'yellow' : 'grey'}
              onMouseEnter={() => setHover(rating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </StyledStarRating>
  );
}

export default StarRating;
