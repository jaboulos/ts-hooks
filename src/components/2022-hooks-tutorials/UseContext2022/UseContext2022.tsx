import React, { useState, createContext } from 'react';
import Login from './Login';
import User from './User';

// createContext allows you to create context
export const AppContext = createContext<any>(null);

// organize state by creating context
// context is collection of states or info you want to access throughout the tree of components
// wrap components with AppContext.Provider
// inside of AppContext.Provider, components will have access to everything in provider
// pass value prop to context provider, value prop is an object of all the functions, states, etc
// instead of passing them as props, go to child components and...
// import the context that was created, AppContext
// then destructure states, functions, etc on child components
export const UseContext2022 = () => {
  const [username, setUsername] = useState<any>('');

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
};
