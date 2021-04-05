import { useState } from 'react';

const UseStateComponent = () => {
  // array of nums
  const [arr, setArr] = useState<number[]>([]);
  // starts as null then becomes a string
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
          Add to array
        </button>
        <button onClick={() => setArr([])}>Reset array</button>
        <div>{JSON.stringify(arr)}</div>
      </div>

      <div>
        <button onClick={() => setName('Joe')}>Render name</button>
        <button onClick={() => setName(null)}>Reset name</button>
        {name && <p>{name}</p>}
      </div>
    </div>
  );
};

export default UseStateComponent;
