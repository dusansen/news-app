import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import Countries from './Countries';

const Header = () => {
  return (
    <StyledWrapper>
      <Navbar />
      <Countries />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: var(--secondary-bg-color);
  width: 100%;
  height: 50px;
`;

export default Header;