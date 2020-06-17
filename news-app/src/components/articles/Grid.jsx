import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

const Grid = ({ articles }) => {
  return (
    <StyledWrapper>
      {articles.map((article, i) => <Thumbnail key={i} article={article} />)}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 768px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Grid;