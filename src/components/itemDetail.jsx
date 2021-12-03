import React from 'react';
import ItemCount from './itemCount';
import './estilos.css';
import {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {CartContext} from './CartContext';

const ItemDetail = ({item}) => {
    
    const [cart, setCart] = useState(true);
    const {setCarr, carr} =useContext(CartContext);
    const {prods,setProds}=useContext(CartContext);
    
    const onAdd=(count)=>{
       let itemiD=item.id
       
      
        setCart(false);
        
        
       if(carr.length>0){
        for (let i=0; i<carr.length;i++){
            if(carr[i].data.id==itemiD){
                setCarr([...carr, {cantidad: count , data: item}])
                setProds(prods+1);
                
               
            }else{
                setCarr([...carr, {cantidad: count , data: item}])
                setProds(prods+1);
                
                
            }
        }
    }else{
        setCarr([...carr, {cantidad: count , data: item}])
        setProds(prods+1);
    
    }
        
        
    
    }
    const FinalizarCompra = () => {

       
        

        return (
            <div>
               
                <Link to="/Cart">
                <Button style={{margin:10}} variant="contained" > Finalizar compra </Button>   
                    </Link>
               
            </div>
        );
    };
    

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
            
            {cart ? (
                            <ItemCount
                                stock={10}
                                
                                initial={1}
                                onAdd={onAdd}
                                className='floatRigth'
                            />
                        ) : (
                            <FinalizarCompra />
                        )}
            
            
        </div>
        </div>

    )
}

export default ItemDetail;