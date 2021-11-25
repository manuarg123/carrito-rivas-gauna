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
            <h1>Servicio: {item.nombre}</h1>
            
            <img src={item.imagen} className='img-tamaño' alt=''/>
            <h2> Categoria: {item.categoria}</h2>
            <h3>Tarea: {item.tarea}</h3>
            <h4>Descripción: {item.descripcion}</h4>
            <h6> Precio: {item.precio}</h6>
            </div>
            <ItemCount stock={10} initial={1} onAdd={onAdd} className='floatRigth' />
            
            
            
            
            
            
        </div>
        </div>

    )
}

export default ItemDetail;