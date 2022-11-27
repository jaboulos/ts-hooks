import React, { useRef } from 'react';
import { Button } from './Button';

export const UseImperativeHandle2022 = () => {
  const buttonRef = useRef<any>(null);

  return (
    <div>
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
