import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import {CartContext} from './CartContext';
import {useContext} from 'react';
import './Cart.css'




const ItemCart = ({cantidad, data}) => {
  
  const {deleteItem}=useContext(CartContext);  
  

 
return (
  <div>
   <Card sx={{ maxWidth: 345, marginLeft:'auto', marginRight:'auto' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={data.imagen}
          
        />
        
        <CardContent style={{backgroundColor:'rgb(74, 143, 207)'} }>
        <div><img
                src="https://casafix.000webhostapp.com/Imagenes%20proyecto%20react/logo1i.png"
                alt="logo"
                className="imgLogoDetail"
              /><span className='txtSpan'>{data.categoria}</span>
              </div>
          <Typography gutterBottom variant="h5" component="div">
             {data.nombre} 
          </Typography>
         
         
          <p><b>Descripcion:</b>{data.descripcion}</p>
          <Typography variant="body2" color="Green">
          <b>Precio:</b> {data.precio}
          </Typography>
          <Typography variant="body2" color="Green">
          <b>Cantidad:</b> {cantidad}
          </Typography>
          <Button style={{margin:10,backgroundColor:'rgba(255, 0, 0, 0.589)' }} variant="contained" onClick={() => deleteItem(data?.id)}> Eliminar Servicio</Button>
        </CardContent>
        
      </CardActionArea>
      
    </Card>
   
    
   
    
    </div>
);
}

export default ItemCart;