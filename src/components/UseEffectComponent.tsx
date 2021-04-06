import { useState, useEffect } from 'react';

const UseEffectComponent = () => {
  const [val, setVal] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal((v) => v + 1);
    }, 2000);
    // cleanup function @14:15
    return () => window.clearInterval(timer);
  }, []);

  return <div>{val}</div>;
};

export default UseEffectComponent;
