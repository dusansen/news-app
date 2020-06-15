import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledWrapper>
      <Navbar />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.header`
  background-color: var(--secondary-bg-color);
  width: 100%;
  height: 50px;
`;

export default Header;