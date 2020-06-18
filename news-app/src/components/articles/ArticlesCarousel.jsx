import React, { useState, useEffect } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Thumbnail from './Thumbnail';
import LeftArrow from '../arrows/LeftArrow';
import RightArrow from '../arrows/RightArrow';
import useWindowSize from '../../hooks/useWindowSize';

const ArticlesCarousel = ({ articles }) => {
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  const size = useWindowSize();

  useEffect(() => {
    calculateSlidesPerPage(size.width);
  }, [size]);
  
  const calculateSlidesPerPage = windowWidth => {
    const numberOfSliderPerPage = windowWidth < 768 ?
      1.2 :
      windowWidth < 1200 ?
        2.2 :
        3.2;
    setSlidesPerPage(numberOfSliderPerPage);
  };

  return (
    <Carousel
      slidesPerPage={slidesPerPage}
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