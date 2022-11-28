import React, { useRef, useState } from 'react';

export const UseRef2022 = () => {
  const [name, setName] = useState<any>('');
  const inputRef = useRef<any>(null);

  const onChange = (e: any) => {
    setName(e.target.value);
  };

  const onClick = () => {
    // .current always
    console.log('input box value is: ', inputRef.current?.value);
    // call focus function on inputRef
    inputRef.current.focus();
    // clear input box on button click
    inputRef.current.value = setName('');
  };

  return (
    <div style={{ padding: '10px', border: 'solid green 1px' }}>
      <h3>{name}</h3>
      <input
        type='text'
        placeholder='example...'
        value={name}
        onChange={onChange}
        ref={inputRef}
      />
      <button onClick={onClick}>useRef to focus on input box</button>
    </div>
  );
};
