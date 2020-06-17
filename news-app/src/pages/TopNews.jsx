import React, { useEffect } from 'react';
import { useAppContext } from '../store/context';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { TOP_ARTICLES_CATEGORY } from '../utils/constants';
import ShowArticles from '../components/articles/ShowArticles';

const TopNews = () => {
  const { state: { country } } = useAppContext();
  const { getArticles } = useApi();

  useEffect(() => {
    getArticles({ country: country.value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return (
    <StyledWrapper>
      <div className='page-title'>Top news from {country.label}</div>
      <ShowArticles category={TOP_ARTICLES_CATEGORY} />
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

export default TopNews;