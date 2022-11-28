import React, { useEffect, useState } from 'react';
import axios from 'axios';

// UseEffect function called when page rerenders
// ex when page loads

export const UseEffect2022 = () => {
  const [response, setResponse] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    // call api on load
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        // get api response, set state with the response
        setResponse(res.data[0].email);
        // called twice, intiially page renders once, then make api call, changes value of state, causes rerender, called again
        console.log('API WAS CALLED');
      })
      .catch((e) => {
        console.log('error ', e);
      });
    // to be called once pass empty array
    // 35min 50sec
  }, []);

  return (
    <div style={{ padding: '10px', border: 'solid blue 1px' }}>
      <span>Hello WuRlLlD</span>
      <h3>{response}</h3>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clicky click
      </button>
    </div>
  );
};
