import styled from 'styled-components';

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .topdiv {
    padding: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    input {
      height: 1.8rem;
      font-size: 1.8rem;
    }
  }

  .cardarea {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
