import { SET_COUNTRY } from './constants';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_COUNTRY:
      return { ...state, country: payload };
    default:
      return state;
  }
};
