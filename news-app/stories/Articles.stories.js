import React from 'react';
import Thumbnail from '../src/components/articles/Thumbnail';
import '../src/index.css';
import Grid from '../src/components/articles/Grid';
import ArticlesCarousel from '../src/components/articles/ArticlesCarousel';

export default {
  title: 'Articles'
};

const article = {
  title: '“This is FAKE News!”: Nets Teammates Defends Kyrie Irving Amidst False Allegations - Essentially Sports',
  description: 'Kyrie Irving was heavily criticised for reportedly making a statement. It turns out, the news was fake. Teammates support against false allegations.',
  urlToImage: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20200617112603/sptn_kyrie_irving_1030_2.jpg',
  content: 'The news of the league’s return has brought different responses from players. Recently, Kyrie Irving was in the limelight for being against the comeback in Orlando amidst coronavirus and BLM protests… [+2510 chars]'
};

const articles = Array(10).fill(article);

export const ArticleThumbnail = () => <Thumbnail article={article} />;

export const ArticlesGrid = () => <Grid articles={articles} />;

export const ArticlesInCarousel = () => <ArticlesCarousel articles={articles} />;
