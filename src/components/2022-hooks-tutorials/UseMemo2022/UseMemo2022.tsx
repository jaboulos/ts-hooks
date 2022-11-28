import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';

export const UseMemo2022 = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        // response is array of objects with comments
        setData(response.data);
      });
  }, []);

  // function that takes in a comment, does a calculation and determines if its
  // the longest name in the comment
  const findLongestName = (comments: any) => {
    if (!comments) return null;

    let longestName = '';
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log('THIS WAS COMPUTED');
    return longestName;
  };

  //
  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div
      className='App'
      style={{ padding: '10px', border: 'solid violet 1px' }}
    >
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};
