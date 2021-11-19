import React from 'react';
import ItemCount from './itemCount';
import './estilos.css'
import onAdd from './funcionCount'
const ItemDetail = ({item}) => {
    
    
    
    

    return (
        <div>
            <div
       item key={item.id} className='centrado'>
            <div className='floatLeft'> 
            <h1>Producto: {item.nombre}</h1>
            
            <img src={item.imagen} className='img-tamaño' alt=''/>
            <h2>ID: {item.id}, Marca: {item.marca}</h2>
            <h4>Descripción: {item.descripcion}</h4>
            <h6> Precio: {item.precio}</h6>
            </div>
            <ItemCount stock={10} initial={1} onAdd={onAdd} className='floatRigth' />
            
            
            
            
            
            
        </div>
        </div>

    )
}

export default ItemDetail;