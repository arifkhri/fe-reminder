import React, { useMemo, useReducer } from "react";

import { LocalDataContext } from './core/context';
import localDataReducer from './core/reducer';

import Routes from "./routes";
import './style.css'

export default function App() {

  const [store, dispatch] = useReducer(localDataReducer, {});
  const contextValue = useMemo(() => ({ store, dispatch }), [store, dispatch]);

  return (
    <LocalDataContext.Provider value={contextValue}>
      <Routes />
    </LocalDataContext.Provider>
  );
};