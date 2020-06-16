import React from 'react';
import styled from 'styled-components';
import Country from './Country';
import { useAppContext } from '../../store/context';
import { COUNTRIES } from '../../utils/constants';

const Countries = () => {
  const { state: { country } } = useAppContext();

  return (
    <StyledWrapper>
      {COUNTRIES.map(c => <Country key={c.value} country={c} selected={country.value === c.value} />)}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Countries;