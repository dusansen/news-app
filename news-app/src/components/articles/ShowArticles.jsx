import React from 'react';
import { useAppContext } from '../../store/context';
import Grid from './Grid';
import ArticlesCarousel from './ArticlesCarousel';

const ShowArticles = ({ category, type = 'grid' }) => {
  const { state: { articles } } = useAppContext();
  
  const showArticles = () => {
    if (!articles[category]) {
      return null;
    }
    if (articles[category].loading) {
      return <div>LOADING</div>;
    }
    if (articles[category].data && articles[category].data.length) {
      return type === 'grid' ?
        <Grid articles={articles[category].data} /> : 
        <ArticlesCarousel articles={articles[category].data} />;
    }
    return <h3>NO RESULTS</h3>;
  };

  return (
    showArticles()
  );
};

export default ShowArticles;

