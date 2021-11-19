import React from 'react'
import Item from './item'


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Selld = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const ItemList = ({items}) =>{
    
    return (
        <div>
            <Stack direction="row" spacing={2} styles={{textAling:'center'}}>
            {
            items.map(({id, descripcion,nombre,marca,precio, imagen})=>(
                <Selld key={id}> 
                <Item id={id}  descripcion= {descripcion} nombre={nombre} marca={marca} precio={precio} imagen={imagen}/>
                </Selld>
            ))
            }
            </Stack>
        </div>

    )
}
export default ItemList;