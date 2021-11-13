import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Item = ({nombre, marca, precio, imagen, id, descripcion}) => {
  console.log(imagen)
  console.log('hola');
return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>Producto:</b> {nombre} , <b>Id:</b> {id}.
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <b>Marca:</b> {marca}
          </Typography>
          <p><b>Descripcion:</b>{descripcion}</p>
          <Typography variant="body2" color="Green">
          <b>Precio:</b> {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
);
}

export default Item;