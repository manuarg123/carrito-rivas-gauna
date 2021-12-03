import React from 'react'

import {createContext, useContext, useState} from 'react';

 export const CartContext=createContext();

export const useCart=()=> useContext();



export const CartProvider=({children})=>{
    const [carr, setCarr]=useState([]);
    const [product,setProduct]=useState([]);
    const [prods, setProds]=useState(0);
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
        
        setProduct(item, quantity);
        console.log('setProduct',setProduct)
    };

    const clearCarr = () => {
        setCarr([]);
        setProds(0);
        
    };
    const precioTotal = () => {
        let precioT=0;
        for(let i=0;i<carr.length;i++){
            precioT=precioT+carr[i].data.precio*carr[i].cantidad;
        }
        return precioT;
        
    }
    const isInCarr=(item)=>{
        return item.some(carrItem=> carrItem.id===item.id)
    }
    const deleteItem=(itemID)=>{
        let indexCarr=0;
        for(let i=0;i<carr.length;i++){
            if(carr[i].data.id===itemID){
               
                indexCarr=i;
            }
        }
        carr.splice(indexCarr,indexCarr+1);
        setCarr(carr);
        setProds(prods-1);
        
    }

    
    const cantProds=()=>{

    }
    return (
        <CartContext.Provider value={ {carr,setCarr,clearCarr, deleteItem, precioTotal, prods,setProds,product,setProduct}}>{children}</CartContext.Provider>
    );
}