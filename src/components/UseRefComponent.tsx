import { useRef } from 'react';

const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return <input placeholder='Hellloooo world' ref={inputRef} />;
};

export default UseRefComponent;
