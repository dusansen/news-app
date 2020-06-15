import React from 'react';
import NavLink from './NavLink';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <StyledWrapper>
      <NavLink to=''>Top News</NavLink>
      <NavLink to='/categories'>Categories</NavLink>
      <NavLink to='/search'>Search</NavLink>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export default Navbar;