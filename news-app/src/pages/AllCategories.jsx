import React, { useEffect } from 'react';
import styled from 'styled-components';
import CategoryArticlesCarousel from '../components/articles/CategoryArticlesCarousel';
import { useAppContext } from '../store/context';
import useApi from '../hooks/useApi';
import { CATEGORIES } from '../utils/constants';

const AllCategories = () => {
  const { state: { country } } = useAppContext();
  const { getArticles } = useApi();

  useEffect(() => {
    CATEGORIES.forEach(category =>
      getArticles({ category, country: country.value, pageSize: 5 })
    );
  }, []);

  return (
    <StyledWrapper>
      <div className='page-title'>Top 5 news by categories from {country.label}</div>
      {CATEGORIES.map((category, i) => <CategoryArticlesCarousel key={i} category={category} />)}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 32px;

  .page-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }
`;

export default AllCategories;