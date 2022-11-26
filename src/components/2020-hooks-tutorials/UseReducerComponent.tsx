import { useReducer } from 'react';

const initialState = {
  counter: 100,
};

// 2 actions that apply to this state
type ACTION_TYPES =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number };

const counterReducer = (state: typeof initialState, action: ACTION_TYPES) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case 'decrement':
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    default:
      throw new Error('Bad action');
  }
};

const UseReducerComponet = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <div>{state.counter}</div>
      <div>
        {/* dispatch an action to our reducer */}
        <button
          onClick={() =>
            dispatch({
              type: 'increment',
              payload: 10,
            })
          }
        >
          Increment
        </button>{' '}
        |{' '}
        <button
          onClick={() =>
            dispatch({
              type: 'decrement',
              payload: 5,
            })
          }
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducerComponet;
