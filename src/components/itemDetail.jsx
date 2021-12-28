import React from 'react';
import ItemCount from './itemCount';
import './estilos.css';
import './itemDetail.css'
import {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {CartContext} from './CartContext';



import Container from '@mui/material/Container';

const ItemDetail = ({item}) => {
    
    const [cart, setCart] = useState(true);
    const {setCarr, carr} =useContext(CartContext);
    const {prods,setProds}=useContext(CartContext);
    
    const onAdd=(count)=>{
       let itemiD=item.id
       
        console.log('La Id al momento del onAdd', itemiD)
        setCart(false);
        
        
       if(carr.length===0){
        setCarr([...carr, {cantidad: count , data: item}])
        setProds(prods+1);
    }else{
        
        if(carr.find(ident=>ident.data.id===itemiD) ){
               let indiceProd=0;
            for(let i =0;i<carr.length;i++){
                    if(carr[i].data.id===itemiD){
                        indiceProd=i;
                    }
                }
            carr[indiceProd].cantidad = carr[indiceProd].cantidad + count
            console.log('agrega cantidad')
           
        }else {
            
            
            
            setCarr([...carr, {cantidad:  count , data: item}])
            setProds(prods+1);
            
            console.log('setea el producto porque no esta rep')
            
            
        }
       
    
    }
        
        
    
    }
    const FinalizarCompra = () => {

      
        

        return (
            <div>
               <h4  className='txtCat'>El servicio se ha registrado correctamente. Dirijase al carrito para checkear su orden.</h4>
                <Link to="/Cart">
                <Button style={{margin:10}} variant="contained" className='buttonStyle noDec' color='success'> Ir al Carrito </Button>   
                    </Link>
               
                   
            </div>
        );
    };
    

    return (
        <div className='itemDiv'>
           
      <Container maxWidth="sm" className='itemCont' >
            <div
       item key={item.id} >
            <div > 
            <div><img
                src="https://casafix.000webhostapp.com/Imagenes%20proyecto%20react/logo1i.png"
                alt="logo"
                className="imgLogoDetail"
              /><span className='txtSpan'>{item.categoria}</span>
              </div>
            <h1 className='txtCat'> {item.nombre}</h1>
            
            <img src={item.imagen} className='img-tamaño' alt=''/>
            
            
            <h4 className='txtCat'><u>Descripción:</u> {item.descripcion}</h4>
            <p className='txtPrecio'> $ {item.precio}</p>
            </div>
            
            {cart ? (
                            <ItemCount
                                stock={10}
                                
                                initial={1}
                                onAdd={onAdd}
                               
                            />
                        ) : (
                            <FinalizarCompra />
                        )}
            
            
        </div>
        </Container>
        </div>

    )
}

export default ItemDetail;