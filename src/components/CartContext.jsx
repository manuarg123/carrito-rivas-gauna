import React from 'react'

import {createContext, useContext, useState} from 'react';

 export const CartContext=createContext();

export const useCart=()=> useContext();



export const CartProvider=({children})=>{
    const [carr, setCarr]=useState([]);
    
    const value= {carr,setCarr}
    //const toggleCart=()=>setCart(!cart);
    /*const isInCart =(item)=>{
        return item;
    }
    const addItem = (item) => {
        if(!isInCart){
        setCart(item);
        }else{

        }
    }*/

    const addProduct = (item, quantity) => {
        
        setCarr(item, quantity);
    };

    const clearCarr = () => {
        setCarr([]);
        
    };

    const isInCarr=(item)=>{
        return item.some(carrItem=> carrItem.id===item.id)
    }

    return (
        <CartContext.Provider value={ value}>{children}</CartContext.Provider>
    );
}