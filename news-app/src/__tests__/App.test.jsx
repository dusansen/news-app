import React from 'react';
import App from '../App';
import { StateProvider } from '../store/context';
import Header from '../components/header/Header';
import { Router } from '@reach/router';
import TopNews from '../pages/TopNews';
import AllCategories from '../pages/AllCategories';
import Search from '../pages/Search';
import Article from '../pages/Article';
import CategoryArticles from '../pages/CategoryArticles';

describe('App', () => {
  it('should render StateProvider, Header and Router with routes', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(StateProvider).exists()).toBe(true);
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Router).exists()).toBe(true);
    expect(wrapper.find(TopNews).exists()).toBe(true);
    expect(wrapper.find(AllCategories).exists()).toBe(true);
    expect(wrapper.find(Search).exists()).toBe(true);
    expect(wrapper.find(Article).exists()).toBe(true);
    expect(wrapper.find(CategoryArticles).exists()).toBe(true);
  });
});