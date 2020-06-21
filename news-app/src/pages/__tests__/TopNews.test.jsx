import React from 'react';
import { useAppContext } from '../../store/context';
import TopNews from '../TopNews';
import ShowArticles from '../../components/articles/ShowArticles';
import useApi from '../../hooks/useApi';

jest.mock('../../store/context');
jest.mock('../../hooks/useApi');

describe('TopNews page', () => {
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

  it('should fetch articles', () => {
    mount(<TopNews />);

    expect(getArticles).toHaveBeenCalledWith({
      country: country.value
    });
  });

  it('should show page title and show articles', () => {
    const wrapper = shallow(<TopNews />);

    expect(wrapper.html()).toContain(`Top news from ${country.label}`);
    expect(wrapper.find(ShowArticles).exists()).toBe(true);
  });
});
