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
    <div>
      <div>
        {counter}
        <button onClick={increment}>INCREASE</button>
      </div>

      <div>
        <input placeholder='enter name' onChange={onChange} />
        {inputValue}
      </div>
    </div>
  );
};
