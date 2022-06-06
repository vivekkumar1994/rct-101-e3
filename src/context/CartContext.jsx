import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart]=useState(0)

  return <CartContext.Provider value={{cart}}>{children}</CartContext.Provider>;
};