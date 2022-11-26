import React, { useReducer } from 'react';

export const INCREMENT = 'INCREMENT';
export const TOGGLE_SHOW_TEXT = 'TOGGLE_SHOW_TEXT';
// works like useState, rerenders when variable changes
// benefit is to use it when you have to manage multiple state values

const reducerFunction = (state: any, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1, showText: state.showText };
    case TOGGLE_SHOW_TEXT:
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

export const UseReducer2022 = () => {
  const [state, dispatch] = useReducer(reducerFunction, {
    count: 0,
    showText: true,
  });

  return (
    <div>
      <div>
        <span style={{ padding: '10px' }}>{state.count}</span>
        <span style={{ padding: '10px' }}>
          {state.showText ? <div>TRUE</div> : <div>FALSE</div>}
        </span>
        <button
          onClick={() => {
            dispatch({ type: INCREMENT });
            dispatch({ type: TOGGLE_SHOW_TEXT });
          }}
        >
          click here
        </button>
      </div>
    </div>
  );
};
