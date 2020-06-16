import React, { createContext, useReducer, useContext } from 'react';
import { reducer } from './reducer';
import { COUNTRIES } from '../utils/constants';

const initialState = {
  country: COUNTRIES[0]
};

const context = createContext(initialState);
const { Provider } = context;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>
};

const useAppContext = () => useContext(context);

export { context, StateProvider, useAppContext };