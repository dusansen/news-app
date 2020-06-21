import React from 'react';
import ShowArticles from '../ShowArticles';
import { useAppContext } from '../../../store/context';
import Grid from '../Grid';
import ArticlesCarousel from '../ArticlesCarousel';

jest.mock('../../../store/context');

describe('ShowArticles component', () => {
  const articles = {
    sport: {
      data: [
        { title: 'title' }
      ],
      loading: false
    },
    entertainment: {
      loading: true,
      data: null
    },
    health: {
      loading: false,
      data: []
    }
  };
  useAppContext.mockReturnValue({
    state: {
      articles
    }
  });
  it('should show loading if articles are fetching', () => {
    const wrapper = shallow(<ShowArticles category='entertainment' />);

    expect(wrapper.html()).toContain('LOADING');
    expect(wrapper.find(Grid).exists()).toBe(false);
    expect(wrapper.find(ArticlesCarousel).exists()).toBe(false);
  });

  it('should show articles in grid when there are articles', () => {
    const wrapper = shallow(<ShowArticles category='sport' />);

    expect(wrapper.html()).not.toContain('LOADING');
    expect(wrapper.find(Grid).exists()).toBe(true);
    expect(wrapper.find(ArticlesCarousel).exists()).toBe(false);
  });

  it('should show articles in carousel when there are articles', () => {
    const wrapper = shallow(<ShowArticles category='sport' type='carousel' />);

    expect(wrapper.html()).not.toContain('LOADING');
    expect(wrapper.find(Grid).exists()).toBe(false);
    expect(wrapper.find(ArticlesCarousel).exists()).toBe(true);
  });

  it('should show no results label when there is no results and loading is finished', () => {
    const wrapper = shallow(<ShowArticles category='health' />);

    expect(wrapper.html()).not.toContain('LOADING');
    expect(wrapper.find(Grid).exists()).toBe(false);
    expect(wrapper.find(ArticlesCarousel).exists()).toBe(false);
    expect(wrapper.html()).toContain('NO RESULTS');
  });
});
