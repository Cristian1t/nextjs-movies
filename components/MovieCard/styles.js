import styled from 'styled-components';

export const StyledCard = styled.div`
  margin: 0.5rem;
  background: white;
  min-height: 250px;
  border: 2px solid black;
  border-radius: 8%;
  display: grid;
  min-width: 15rem;
  max-width: 15rem;
  display: flex;
  justify-content: center;
  :hover {
    background: black;
    color: white;
  }
  a {
    text-decoration: none;
    text-align: center;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
  }
`;
