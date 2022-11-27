import React, { forwardRef, useImperativeHandle, useState } from 'react';

export const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState<any>(false);

  // weird way to call this function
  // takes 2 arguments, 1st is the ref, 2nd is a cb function

  useImperativeHandle(ref, () => ({
    // create a function that returns an object
    // inside this object, create functions that we want to
    // acc in our parent
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  const onClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button onClick={onClick}>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});
