import React from 'react';
import Search from '../Search';
import { useAppContext } from '../../store/context';
import ShowArticles from '../../components/articles/ShowArticles';
import { act } from 'react-dom/test-utils';

jest.mock('../../store/context');

describe('Search page', () => {
  const country = {
    label: 'Great Britain',
    value: 'gb'
  };
  useAppContext.mockReturnValue({
    state: {
      country,
      articles: {}
    }
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('should show page title and search input and show articles component', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.html()).toContain(`Search top news from ${country.label} by term`);
    expect(wrapper.find('.search-input').exists()).toBe(true);
    expect(wrapper.find(ShowArticles).exists()).toBe(true);
  });

  it('should search for articles when search term is entered', async () => {
    const searchTerm = 'test';
    const persist = jest.fn();
    const wrapper = mount(<Search />);
    
    await act(async () => {
      wrapper.find('.search-input').simulate('change', { target: { value: searchTerm }, persist });
    });

    jest.advanceTimersByTime(1000);
    // not working, have some problem running debounced function
  });
});
