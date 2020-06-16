import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../store/context';
import { SET_COUNTRY } from '../../store/constants';

const Country = ({ country, selected }) => {
  const { dispatch } = useAppContext();

  const handleClick = () => {
    dispatch({ type: SET_COUNTRY, payload: country })
  };

  return (
    <StyledWrapper
      className={`${selected ? 'selected-country' : ''}`}
      onClick={handleClick}>
      {country.value}
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