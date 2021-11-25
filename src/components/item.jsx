import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';


const Item = ({nombre, categoria, tarea, precio, imagen, id, descripcion}) => {
  
return (
   <Link to={`/item/${id}`}>
   <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>Servicio:</b> {nombre} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <b>Categoria:</b> {categoria}
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
          <b>Tarea:</b> {tarea}
          </Typography>
          <p><b>Descripcion:</b>{descripcion}</p>
          <Typography variant="body2" color="Green">
          <b>Precio:</b> {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Link>
);
}

export default Item;