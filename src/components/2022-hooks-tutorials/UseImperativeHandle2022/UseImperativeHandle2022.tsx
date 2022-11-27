import React, { useRef } from 'react';
import { Button } from './Button';

export const UseImperativeHandle2022 = () => {
  const buttonRef = useRef<any>(null);

  return (
    <div style={{ padding: '10px', border: 'solid maroon 1px' }}>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};
