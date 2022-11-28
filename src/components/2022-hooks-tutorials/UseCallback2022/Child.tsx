import React, { useEffect } from 'react';

export const Child = ({ returnComment }: any) => {
  useEffect(() => {
    console.log('FUNCTION WAS CALLED');
  }, [returnComment]);

  return <div>{returnComment('Pedro')}</div>;
};
