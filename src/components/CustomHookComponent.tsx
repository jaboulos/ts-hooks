import { useState, useEffect } from 'react';

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

// create custom hook instead of using useState and useEffect
const useFetchData = (
  url: string
): {
  data: Beverage[] | null;
  done: boolean;
} => {
  const [data, setData] = useState<Beverage[] | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Beverage[]) => {
        setData(d);
        setDone(true);
      });
  }, [url]);

  return {
    data,
    done,
  };
};

const CustomHookComponent = () => {
  const { data, done } = useFetchData('/data.json');
  return (
    <div>
      {done && (
        <img
          // src={data[0].logo} // get a ts warning like this, about null.  Get rid of it with ! to guarantee that it will not be null
          src={data![13].logo}
          alt='Beverage Logo'
        />
      )}
    </div>
  );
};

export default CustomHookComponent;
