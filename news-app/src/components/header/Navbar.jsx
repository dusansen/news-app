import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav>
      <NavLink to=''>Top News</NavLink>
      <NavLink to='/categories'>Categories</NavLink>
      <NavLink to='/search'>Search</NavLink>
    </nav>
  );
};

export default Navbar;