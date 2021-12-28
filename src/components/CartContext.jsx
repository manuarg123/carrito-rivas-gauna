import React from "react";

import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext();

export const CartProvider = ({ children }) => {
  const [carr, setCarr] = useState([]);

  const [prods, setProds] = useState(0);
 
  

 

  const clearCarr = () => {
    setCarr([]);
    setProds(0);
  };
  const precioTotal = () => {
    let precioT = 0;
    for (let i = 0; i < carr.length; i++) {
      precioT = precioT + carr[i].data.precio * carr[i].cantidad;
    }
    return precioT;
  };
  
  const deleteItem = (itemID) => {
    let indexCarr = 0;
    for (let i = 0; i < carr.length; i++) {
      if (carr[i].data.id === itemID) {
        indexCarr = i;
      }
    }
    carr.splice(indexCarr, indexCarr + 1);
    setCarr(carr);
    setProds(prods - 1);
  };

 
  return (
    <CartContext.Provider
      value={{
        carr,
        setCarr,
        clearCarr,
        deleteItem,
        precioTotal,
        prods,
        setProds,
        
       

      }}
    >
      {children}
    </CartContext.Provider>
  );
};
