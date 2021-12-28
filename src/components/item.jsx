import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';
import './itemListContainer.css'

const Item = ({nombre, categoria, tarea, precio, imagen, id, descripcion}) => {
  
return (
  <div >
    
   <Link to={`/item/${id}`} style={{textDecoration:'none'}}>
   <Card sx={{ maxWidth: 345, marginLeft:'auto', marginRight:'auto' }}>
      <CardActionArea  >
        <CardMedia
          component="img"
          height="240"
          image={imagen}
          
        />
        <CardContent style={{backgroundColor:'rgb(74, 143, 207)', height:250}}>
          
        <div><img
                src="https://casafix.000webhostapp.com/Imagenes%20proyecto%20react/logo1i.png"
                alt="logo"
                className="imgLogoDetail"
              /><span className='txtSpan'>{categoria}</span>

              
              </div>
          
          <Typography gutterBottom variant="h5" component="div">
            
            
            <b> {nombre} </b>
          </Typography>
          
         
          <p className='fontDesc'><b>Descripcion:</b>{descripcion}</p>
          <Typography variant="body2" color="Green">
          <b>${precio}</b> 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Link>
  </div>
);
}

export default Item;