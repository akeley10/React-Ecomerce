import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

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

  // Cuando el contexto se monta, intenta leer el email guardado
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmailState(storedEmail);
    }
  }, []);

  // Esta función setEmail actualiza el estado y el localStorage
  const setEmail = (email: string) => {
    setEmailState(email);
    localStorage.setItem('userEmail', email);
  };

  const deleteEmail = (email: string) => {
    setEmailState(email);
    localStorage.removeItem('userEmail');
  };

  return (
    <UserContext.Provider value={{ email, setEmail, deleteEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
