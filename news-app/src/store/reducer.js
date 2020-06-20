import { SET_COUNTRY, SET_ARTICLES, SET_CURRENT_ARTICLE } from './constants';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_COUNTRY:
      return { ...state, country: payload };
    case SET_ARTICLES:
      const { category, data, loading } = payload;
      return {
        ...state,
        articles: {
          ...state.articles,
          [category]: {
            data,
            loading
          }
        }
      };
    case SET_CURRENT_ARTICLE:
      return { ...state, currentArticle: payload };
    default:
      return state;
  }
};
