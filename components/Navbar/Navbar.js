import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>MyMovies</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/movielist">
          <a>Movie List</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
