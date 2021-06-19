import React from 'react';
import Link from 'next/link';
import { StyledNavbar } from './styles';

function Navbar() {
  return (
    <StyledNavbar>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/movielist">
        <a>Movie List</a>
      </Link>
    </StyledNavbar>
  );
}

export default Navbar;
