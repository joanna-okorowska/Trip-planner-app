import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [use, setUser] = useState("");

  return (
    <UserContext.Provider value={{use, setUser}}>
      {children}
    </UserContext.Provider>
  );
};