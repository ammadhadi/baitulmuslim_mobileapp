import React, { createContext, useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  // memoize the full context value
  const contextValue = useMemo(
    () => ({}),
    []
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
