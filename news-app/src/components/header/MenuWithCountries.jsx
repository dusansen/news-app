import React from 'react';
import styled from 'styled-components';
import Country from './Country';
import { useAppContext } from '../../store/context';
import { COUNTRIES } from '../../utils/constants';
import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';

const MenuWithCountries = ({ showMenu = true, toggleMenu, expanded }) => {
  const { state: { country } } = useAppContext();

  return (
    <StyledWrapper>
      <div className='countries-select'>
        {COUNTRIES.map(c => <Country key={c.value} country={c} selected={country.value === c.value} />)}
      </div>
      {
        showMenu &&
        <img
          className='menu-icon'
          src={expanded ? close : menu}
          alt={expanded ? 'X' : '='}
          onClick={toggleMenu}
        />
      }
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;

  .countries-select {
    display: flex;
    flex-direction: row;
    min-height: 40px;
  }

  .menu-icon {
    cursor: pointer;
    margin-right: 10px;
  }
`;

export default MenuWithCountries;