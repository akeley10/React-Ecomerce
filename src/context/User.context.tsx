import { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';

interface UserContextType {
  email: string;
  setEmail: (email: string) => void;
  deleteEmail: () => void;
}

const UserContext = createContext<UserContextType>({
  email: 'Guest',
  setEmail: () => {},
  deleteEmail: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmailState] = useState('Guest');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmailState(storedEmail);
    }
  }, []);

  const setEmail = (email: string) => {
    setEmailState(email);
    localStorage.setItem('userEmail', email);
  };

  const deleteEmail = () => {
    setEmailState('Guest');
    localStorage.removeItem('userEmail');
  };

  return (
    <UserContext.Provider value={{ email, setEmail, deleteEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
