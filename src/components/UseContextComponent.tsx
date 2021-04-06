import { useState, useContext } from 'react';
import UserContext, { UserState } from '../store'; // why does this naming convention work?

// compoonent that consumes the context
const ConsumerComponent = () => {
  // use useContext
  const user = useContext<UserState>(UserContext);
  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
};

const UseContextComponent = () => {
  const [user, setUser] = useState<UserState>({
    first: 'Joe',
    last: 'Boulos',
  });
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <div>
        <button
          onClick={() =>
            setUser({
              first: 'New First Name',
              last: 'New Last Name',
            })
          }
        >
          Change Context
        </button>
      </div>
    </UserContext.Provider>
  );
};

export default UseContextComponent;
