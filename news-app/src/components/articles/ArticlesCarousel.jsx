import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Thumbnail from './Thumbnail';
import LeftArrow from '../arrows/LeftArrow';
import RightArrow from '../arrows/RightArrow';

const ArticlesCarousel = ({ articles }) => {
  return (
    <Carousel
      slidesPerPage={3.2}
      offset={16}
      arrows={true}
      arrowLeft={<LeftArrow />}
      arrowRight={<RightArrow />}
      addArrowClickHandler>
      {articles.map((article, i) => <Thumbnail key={i} article={article} />)}
    </Carousel>
  );
};

export default ArticlesCarousel;