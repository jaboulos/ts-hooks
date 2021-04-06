import { useState, useEffect, useMemo } from 'react';

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
const useFetchData = <Payload,>(
  url: string
): {
  data: Payload[] | null;
  done: boolean;
} => {
  const [data, setData] = useState<Payload[] | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload[]) => {
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
  const { data } = useFetchData<Beverage>('/data.json');
  // want only the portland taps
  const portlandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes('Portland')),
    [data] // whenever data changes, recompute portland taps
  );
  return (
    <div>
      {portlandTaps.length && (
        <img
          // src={data[0].logo} // get a ts warning like this, about null.  Get rid of it with ! to guarantee that it will not be null
          src={portlandTaps![0].logo}
          alt='Beverage Logo'
        />
      )}
    </div>
  );
};

export default CustomHookComponent;
