import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import {CartContext} from './CartContext';
import {useContext} from 'react';


const ItemCart = ({cantidad, data}) => {
  const {deleteItem}=useContext(CartContext);  
return (
  <div>
   <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.imagen}
          
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>Servicio:</b> {data.nombre} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <b>Categoria:</b> {data.categoria}
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
          <b>Tarea:</b> {data.tarea}
          </Typography>
          <p><b>Descripcion:</b>{data.descripcion}</p>
          <Typography variant="body2" color="Green">
          <b>Precio:</b> {data.precio}
          </Typography>
          <Typography variant="body2" color="Green">
          <b>Cantidad:</b> {cantidad}
          </Typography>
          
        </CardContent>
      </CardActionArea>
     
    </Card>
    <Button style={{margin:10}} variant="contained" onClick={() => deleteItem(data?.id)}> Eliminar Producto</Button>
    </div>
);
}

export default ItemCart;