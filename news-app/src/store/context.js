import React, { createContext, useReducer, useContext } from 'react';
import { reducer } from './reducer';

const initialState = {
  country: {}
};

const context = createContext(initialState);
const { Provider } = context;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>
};

const useAppContext = () => useContext(context);

export { context, StateProvider, useAppContext };