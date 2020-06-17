import React from 'react';
import { useAppContext } from '../../store/context';
import Grid from './Grid';

const ShowArticles = ({ category }) => {
  const { state: { articles } } = useAppContext();
  
  const showArticles = () => {
    if (!articles[category]) {
      return null;
    }
    if (articles[category].loading) {
      return <div>LOADING</div>;
    }
    if (articles[category].data && articles[category].data.length) {
      return <Grid articles={articles[category].data} />;
    }
    return <h3>NO RESULTS</h3>;
  };

  return (
    showArticles()
  );
};

export default ShowArticles;

