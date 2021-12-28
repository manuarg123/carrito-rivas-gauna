import React from "react";
import Item from "./item";
import './itemListContainer.css'

import Grid from '@mui/material/Grid';


const ItemList = ({ items }) => {
  return (
    
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
     
        {items.map(
          ({ id, descripcion, nombre, categoria, tarea, precio, imagen }) => (
            <Grid  item xs={12} item sm={6}  >
              <Item
                id={id}
                descripcion={descripcion}
                tarea={tarea}
                nombre={nombre}
                categoria={categoria}
                precio={precio}
                imagen={imagen}
              />
          </Grid>
          )
        )}
      
      </Grid>
    
  );
};
export default ItemList;
/*<Stack direction="column" spacing={2} styles={{ textAling: "center" }}>
</Stack>
<Selld key={id}>
  </Selld>
*/