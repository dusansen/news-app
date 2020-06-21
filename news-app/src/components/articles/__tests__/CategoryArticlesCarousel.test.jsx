import React from 'react';
import CategoryArticlesCarousel from '../CategoryArticlesCarousel';
import { Link } from '@reach/router';
import { useAppContext } from '../../../store/context';
import ShowArticles from '../ShowArticles';

jest.mock('../../../store/context');

describe('CategoryArticlesCarousel component', () => {
  const category = 'sport';
  useAppContext.mockReturnValue({
    state: {
      articles: {}
    }
  });

  it('should should show category name with collapse/expand icon and show articles', () => {
    const wrapper = shallow(<CategoryArticlesCarousel category={category} />);

    expect(wrapper.find(Link).exists()).toBe(true);
    expect(wrapper.html()).toContain('src="chevron-down.svg"');
    expect(wrapper.find(ShowArticles).exists()).toBe(true);
  });

  it('should hide articles when component is collapsed', () => {
    const wrapper = shallow(<CategoryArticlesCarousel category={category} />);

    wrapper.find('.expand-collapse-icon').simulate('click');

    expect(wrapper.find('.articles-carousel-wrapper.hidden').exists()).toBe(true);
    expect(wrapper.find('.expand-collapse-icon.rotate').exists()).toBe(true);
  });
});
