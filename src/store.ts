import { createContext } from 'react';

const initialState = {
  first: 'Joe',
  last: 'Boulos',
};

// helps to define the shape we want from useState in UserContextComponent
export type UserState = typeof initialState;

// typeof is saying it wants initalState as its type
const context = createContext<typeof initialState>(initialState);

export default context;
