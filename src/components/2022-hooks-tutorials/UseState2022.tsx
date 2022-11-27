import React, { useState } from 'react';

export const UseState2 = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('name...');

  const increment = () => {
    return setCounter(counter + 1);
  };

  let onChange = (e: any) => {
    setInputValue(e.target.value);
  };
  return (
    <div style={{ padding: '10px', border: 'solid black 1px' }}>
      <div style={{ padding: '10px' }}>
        <span style={{ paddingRight: '10px' }}>{counter}</span>
        <button onClick={increment}>INCREASE</button>
      </div>

      <div style={{ padding: '10px' }}>
        <input placeholder='enter name' onChange={onChange} />
        <span style={{ paddingLeft: '10px' }}>{inputValue}</span>
      </div>
    </div>
  );
};
