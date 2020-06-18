import React, { useState } from 'react';
import styled from 'styled-components';
import chevronDown from '../../assets/icons/chevron-down.svg';
import ShowArticles from './ShowArticles';
import { Link } from '@reach/router';
import { capitalize } from '../../utils/text';

const CategoryArticlesCarousel = ({ category }) => {
  const [showArticles, setShowArticles] = useState(true);

  const toggleShowArticles = () => setShowArticles(!showArticles);

  return (
    <StyledWrapper>
      <div className='category-header'>
        <Link
          to={`/category/${category}`}
          className='category-name-link'>
          {capitalize(category)}
        </Link>
        <img
          src={chevronDown}
          alt=''
          className={`expand-collapse-icon ${!showArticles ? 'rotate' : ''}`}
          onClick={toggleShowArticles}/>
      </div>
      <div className={`articles-carousel-wrapper ${!showArticles ? 'hidden' : '' }`}>
        <ShowArticles category={category} type='carousel' />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin-top: 32px;

  .category-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 16px 48px ;
  }

  .category-name-link {
    text-decoration: none;
    color: #000000;
  }

  .expand-collapse-icon {
    margin-left: 8px;
    cursor: pointer;
    transition: all 0.5s;
  }

  .rotate {
    transition: all 0.5s;
    transform: rotate(180deg);
  }
  
  .hidden {
    display: none;
  }
`;

export default CategoryArticlesCarousel;