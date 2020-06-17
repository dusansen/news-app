import React, { useEffect } from 'react';
import { useAppContext } from '../store/context';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import Grid from '../components/articles/Grid';

const TopNews = () => {
  const { state: { country, articles } } = useAppContext();
  const { getArticles } = useApi();

  useEffect(() => {
    getArticles({ country: country.value });
  }, [country]);

  const renderArticlesGrid = () => {
    if (!articles.all) {
      return null;
    }
    if (articles.all.loading) {
      return <div>LOADING</div>;
    }
    if (articles.all.data && articles.all.data.length) {
      return <Grid articles={articles.all.data} />;
    }
    return <h3>NO RESULTS</h3>;
  };

  return (
    <StyledWrapper>
      <div className='page-title'>Top news from {country.label}</div>
      {renderArticlesGrid()}
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