import { SET_COUNTRY, SET_ARTICLES } from './constants';

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
    default:
      return state;
  }
};
