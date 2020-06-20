import { reducer } from '../reducer';
import { SET_COUNTRY, SET_ARTICLES, SET_CURRENT_ARTICLE } from '../constants';

describe('Reducer', () => {
  const initialState = {
    country: {
      label: 'Great Britain',
      value: 'GB'
    },
    articles: {},
    currentArticle: null
  };

  it('should save country to state when SET_COUNTRY action occurs', () => {
    const newCountry = {
      value: 'new',
      test: 'new'
    };
    const action = {
      type: SET_COUNTRY,
      payload: newCountry
    };

    const state = reducer(initialState, action);

    expect(state.country).toEqual(newCountry);
  });

  it('should save articles to state when SET_ARTICLES action occurs', () => {
    const newArticles = [{ title: 'Article 1' }];
    const payload = {
      data: newArticles,
      category: 'sport',
      loading: false
    }
    const expected = {
      sport: {
        data: newArticles,
        loading: false
      }
    };
    const action = {
      type: SET_ARTICLES,
      payload
    };

    const state = reducer(initialState, action);

    expect(state.articles).toEqual(expected);
  });

  it('should save current article to state when SET_CURRENT_ARTICLE action occurs', () => {
    const article = { title: 'Article 1' };
    const action = {
      type: SET_CURRENT_ARTICLE,
      payload: article
    };

    const state = reducer(initialState, action);

    expect(state.currentArticle).toEqual(article);
  });
});