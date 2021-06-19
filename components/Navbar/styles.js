import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
  min-height: 4rem;
  a {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
    font-size: 2rem;
    padding: 0 2rem;
    margin: 0 0.5rem;
    :hover {
      background: black;
      color: white;
    }
  }
`;
