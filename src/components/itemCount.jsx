import { useState } from 'react';
import Button from '@mui/material/Button';
import './itemDetail.css'

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount]=useState(initial);
    
    const agregar=()=>{
        const newVal=count +1;
        if(newVal<= stock){
            setCount(newVal);
            
        }
      
    };

    
    const quitar=()=>{
        const newVal=count-1;
        if(newVal>= initial){
            setCount(newVal);
            
        }
    };
    const enviar=()=>{
        if(stock>0){
        return onAdd(count);
        }
    }
     return(
        <div>
        
        <div  >
        <Button  variant="contained" color="success" onClick={agregar}> + </Button>
        <span>   {count}   </span>
        <Button  variant="outlined" color="error" onClick={quitar}> - </Button>
        </div>


        <Button style={{margin:10}} variant="contained" color='success' onClick={enviar} className='buttonStyle'> Agregar al carrito </Button>
        
        </div>
        
         
     );   
    

};

export default ItemCount;