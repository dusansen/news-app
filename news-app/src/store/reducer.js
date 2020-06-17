import { SET_COUNTRY, SET_HEADLINES } from './constants';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_COUNTRY:
      return { ...state, country: payload };
    case SET_HEADLINES:
      const { category, data } = payload;
      return {
        ...state,
        headlines: {
          ...state.headlines,
          [category]: {
            data,
            loading: false
          }
        }
      };
    default:
      return state;
  }
};
