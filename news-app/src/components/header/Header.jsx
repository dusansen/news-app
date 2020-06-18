import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import Countries from './MenuWithCountries';
import useWindowSize from '../../hooks/useWindowSize';

const Header = () => {
  const [headerType, setHeaderType] = useState('horizontal');
  const [expanded, setExpanded] = useState(false);
  const size = useWindowSize();

  const toggleMenu = () => setExpanded(!expanded);

  useEffect(() => {
    setHeaderType(size.width < 768 ? 'vertical' : 'horizontal');
  }, [size]);

  return (
    <StyledWrapper>
      <header className={`header header-${headerType}`}>
        {headerType === 'horizontal' || expanded ? <Navbar /> : null}
        <Countries
          showMenu={headerType === 'vertical'}
          toggleMenu={toggleMenu}
          expanded={expanded} />
      </header>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    background-color: var(--secondary-bg-color);
    width: 100%;
  }

  .header-horizontal {
    flex-direction: row;
    height: 50px;
  }

  .header-vertical {
    flex-direction: column-reverse;
  }
`;

export default Header;