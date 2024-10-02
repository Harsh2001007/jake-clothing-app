import React, {createContext, useState} from 'react';

// Create the UserContext
export const UserContext = createContext();

// Define the provider component
export const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};
