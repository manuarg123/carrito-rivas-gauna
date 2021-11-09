import { useState } from 'react';
import Button from '@mui/material/Button';


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
        <h1>Contador: </h1>
        <div style={{}} >
        <Button style={{ }} variant="contained" color="success" onClick={agregar}> + </Button>
        <p style={{}} >{count}</p>
        <Button style={{}}  variant="outlined" color="error" onClick={quitar}> - </Button>
        </div>


        <Button style={{margin:10}} variant="contained" onClick={enviar}> Agregar al carrito </Button>
        
        </div>
        
         
     );   
    

};

export default ItemCount;