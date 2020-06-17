import React from 'react';
import Thumbnail from '../src/components/articles/Thumbnail';
import '../src/index.css';
import Grid from '../src/components/articles/Grid';

export default {
  title: 'Articles'
};

const article = {
  title: '“This is FAKE News!”: Nets Teammates Defends Kyrie Irving Amidst False Allegations - Essentially Sports',
  description: 'Kyrie Irving was heavily criticised for reportedly making a statement. It turns out, the news was fake. Teammates support against false allegations.',
  urlToImage: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20200617112603/sptn_kyrie_irving_1030_2.jpg'
};

const articles = Array(10).fill(article);

export const ArticleThumbnail = () => <Thumbnail article={article} />;

export const ArticlesGrid = () => <Grid articles={articles} />;
