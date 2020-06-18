import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../store/context';
import useApi from '../hooks/useApi';
import ShowArticles from '../components/articles/ShowArticles';

const CategoryArticles = ({ category }) => {
  const { state: { country } } = useAppContext();
  const { getArticles } = useApi();

  useEffect(() => {
    getArticles({
      country: country.value,
      category
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return (
    <StyledWrapper>
      <div className='page-title'>Top {category} news from {country.label}</div>
      <ShowArticles category={category} />
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

export default CategoryArticles;