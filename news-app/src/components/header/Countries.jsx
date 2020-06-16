import React from 'react';
import styled from 'styled-components';
import Country from './Country';

const COUNTRIES = [
  {
    label: 'GB',
    value: 'GB'
  },
  {
    label: 'US',
    value: 'US'
  }
];

const Countries = () => {
  return (
    <StyledWrapper>
      {COUNTRIES.map(c => <Country key={c.value} country={c} />)}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Countries;