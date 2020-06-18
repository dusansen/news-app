import React from 'react';
import { Router } from '@reach/router';
import TopNews from './pages/TopNews';
import AllCategories from './pages/AllCategories';
import Search from './pages/Search';
import Header from './components/header/Header';
import { StateProvider } from './store/context';
import Article from './pages/Article';
import CategoryArticles from './pages/CategoryArticles';

const App = () => {
  return (
    <StateProvider>
      <Header />
      <Router>
        <TopNews path='/' />
        <AllCategories path='/categories' />
        <Search path='/search' />
        <Article path='/article' />
        <CategoryArticles path='category/:category' />
      </Router>
    </StateProvider>
  );
};

export default App;
