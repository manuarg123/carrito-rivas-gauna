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




const ItemFilterElectricidad = ({items}) =>{
    
    return (
        <div>
            <Stack direction="row" spacing={2} styles={{textAling:'center'}}>
            
                 {
                     items.filter(itm=> itm.categoria==='Electricidad').map(filteredItem => (
                        <Selld key={filteredItem.id}> 
                        <Item id={filteredItem.id}  descripcion= {filteredItem.descripcion} tarea={filteredItem.tarea} nombre={filteredItem.nombre} categoria={filteredItem.categoria} precio={filteredItem.precio} imagen={filteredItem.imagen}/>
                        </Selld>
                  ))
                }
            
            </Stack>
        </div>

    )
}
export default ItemFilterElectricidad;