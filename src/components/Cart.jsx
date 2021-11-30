import {useState, useContext} from 'react';
import {CartContext} from './CartContext';



const Cart = () =>{

    const {carr}=useContext(CartContext);
    console.log('carr:',carr);

    return (
        <div>
            <h1>Soy el Cart</h1>
            <p>Se agregaron {carr[carr.length-1].cantidad} productos de {carr[carr.length-1].data.nombre}</p>
            <p></p>
        </div>
            
    );
}

export default Cart