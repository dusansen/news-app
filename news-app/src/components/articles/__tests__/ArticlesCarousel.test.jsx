import React from 'react';
import ArticlesCarousel from '../ArticlesCarousel';
import Carousel from '@brainhubeu/react-carousel';
import LeftArrow from '../../arrows/LeftArrow';
import RightArrow from '../../arrows/RightArrow';

describe('ArticlesCarousel component', () => {
  it('should render articles carousel with custom arrows', () => {
    const wrapper = mount(<ArticlesCarousel articles={[]} />)

    expect(wrapper.find(Carousel).exists()).toBe(true);
    expect(wrapper.find(LeftArrow).exists()).toBe(true);
    expect(wrapper.find(RightArrow).exists()).toBe(true);
  });  
});
