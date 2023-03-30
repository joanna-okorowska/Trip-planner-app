import React, { createContext, useState } from "react";

export const EmailContext = createContext();

export const EmailProvider = ({children}) => {
    const [email, setEmail] = useState("123@123.pl")
    return (
      <EmailContext.Provider
        value={{
          email,
          setEmail
        }}>
        {children}
      </EmailContext.Provider>
    );
  };