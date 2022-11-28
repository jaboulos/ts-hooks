import React, { useLayoutEffect, useEffect, useRef } from 'react';

export const UseLayoutEffect2022 = () => {
  const inputRef = useRef<any>(null);
  // is called before useEffect
  // called before stuff is printed to user
  useLayoutEffect(() => {
    console.log('UseLayoutEffect ', inputRef.current.value);
  }, []);

  // called after DOM is rendered
  useEffect(() => {
    inputRef.current.value = 'HELLOOOOO';
    console.log('USE EFFECT CONSOLE LOG: ', inputRef.current.value);
  }, []);

  // purpose is to show that the input value is called in layout effect first, then
  // change the value in useEffect, which is called later, console log the input value
  // shows the initial value and the new value through targeting the element
  // with useRef hook
  return (
    <div
      style={{
        padding: '10px',
        border: 'solid orange 1px',
        width: '200px',
        height: '50px',
      }}
    >
      <input ref={inputRef} value='SOME LONG DEFAULT VALUE' />
    </div>
  );
};
