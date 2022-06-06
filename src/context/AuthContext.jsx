import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
   const [isAuth,togglesetAuth]=useState(false);

    const toggle=(value)=>{
     togglesetAuth(value);
    }
  return <AuthContext.Provider value={{isAuth,toggle}}>{children}</AuthContext.Provider>;
};