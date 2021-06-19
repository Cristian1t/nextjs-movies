import styled from 'styled-components';

export const StyledMovie = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 3rem;
  .maininfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: 1 / 1 / 2 / 2;
  }
  .ratings {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: 1 / 2 / 2 / 3;
  }
  .otherinfo {
    width: 100%;
    text-align: center;
    border-top: 1px solid black;
    grid-area: 2 / 1 / 3 / 3;
  }
`;
