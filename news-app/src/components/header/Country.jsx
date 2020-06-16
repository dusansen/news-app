import React from 'react';
import styled from 'styled-components';

const Country = ({ country: { label, value } }) => {
  return (
    <StyledWrapper>
      {label}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  font-size: 20px;
  font-weight: 500;
  color: var(--secondary-text-color);
  cursor: pointer;

  :hover {
    background-color: var(--nav-link-bg-hover-color);
  }
`;

export default Country;