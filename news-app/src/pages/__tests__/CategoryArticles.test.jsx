import React from 'react';
import { useAppContext } from '../../store/context';
import CategoryArticles from '../CategoryArticles';
import useApi from '../../hooks/useApi';
import ShowArticles from '../../components/articles/ShowArticles';

jest.mock('../../store/context');
jest.mock('../../hooks/useApi');

describe('CategoryArticles page', () => {
  const category = 'sport';
  const country = {
    label: 'Great Britain',
    value: 'gb'
  };
  const getArticles = jest.fn();
  useAppContext.mockReturnValue({
    state: {
      country,
      articles: {}
    }
  });
  useApi.mockReturnValue({ getArticles });
  it('should fetch articles for category', () => {
    mount(<CategoryArticles category={category} />);

    expect(getArticles).toHaveBeenCalledWith({
      category,
      country: country.value
    });
  });

  it('should show page title and show articles for that category', () => {
    const wrapper = shallow(<CategoryArticles category={category} />);

    expect(wrapper.html()).toContain(`Top ${category} news from ${country.label}`);
    expect(wrapper.find(ShowArticles).exists()).toBe(true);
  });
});
