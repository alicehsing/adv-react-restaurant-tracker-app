import { createContext, useContext, useState } from 'react';
import { getUser, signUpUser, signInUser, signOutUser } from '../services/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();

  //create some state
  //setting user email to null initially so we know whether some is logged in or not
  const [user, setUser] = useState(currentUser || { email: null });

  //sign up function
  const signUp = async (email, password) => {
    const newUser = await signUpUser({ email, password });
    if (newUser) {
      setUser(newUser);
    }
  };

  //sign in function
  const signIn = async (email, password) => {
    const authenticatedUser = await signInUser({ email, password });
    if (authenticatedUser) {
      setUser(authenticatedUser);
    } else {
      throw new Error('Invalid Credentials.');
    }
  };

  //sign out function
  const logout = async () => {
    setUser({ email: null });
    signOutUser();
  };

  return (
    <UserContext.Provider value={{ user, signUp, signIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// create a custom hook called "useUser"
export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
