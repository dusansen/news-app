import React from 'react';
import { useAppContext } from '../../store/context';
import { CATEGORIES } from '../../utils/constants';
import useApi from '../../hooks/useApi';
import AllCategories from '../AllCategories';
import CategoryArticlesCarousel from '../../components/articles/CategoryArticlesCarousel';

jest.mock('../../store/context');
jest.mock('../../hooks/useApi');

describe('AllCategories page', () => {
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

  it.each(CATEGORIES)('should fetch articles for %s category', category => {
    const wrapper = mount(<AllCategories />);

    expect(getArticles).toHaveBeenCalledWith({
      category,
      pageSize: 5,
      country: country.value
    });
  });

  it('should show page title for categories page', () => {
    const wrapper = shallow(<AllCategories />);

    expect(wrapper.html()).toContain(`Top 5 news by categories from ${country.label}`);
  });

  it('should render category articles carousel', () => {
    const wrapper = shallow(<AllCategories />);

    expect(wrapper.find(CategoryArticlesCarousel).exists()).toBe(true);
  });
});
