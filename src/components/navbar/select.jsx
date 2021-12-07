import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link} from 'react-router-dom'


export default function BasicSelect() {
  const [cat, setCat] = React.useState('');
  console.log(cat);
  const handleChange = (event) => {
    setCat(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" >Categorias</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
          label="Categoria"
          
          onChange={handleChange}
        >
          <Link to={'category/todos'}><MenuItem value={'Todas'}>Todas</MenuItem></Link>
          <Link to={'category/airesAcondicionados'}><MenuItem value={'Aires Acondicionados'}>Aire Acondicionado</MenuItem></Link>
          <Link to={'category/Iluminacion'}><MenuItem value={'Iluminacion'}>Iluminacion</MenuItem></Link>
          <Link to={'category/Electricidad'}> <MenuItem value={'Electricidad'}>Electricidad</MenuItem></Link>
          <Link to={'category/Electrodomesticos'}><MenuItem value={'Electrodomésticos'}>Electrodomésticos</MenuItem></Link>
          <Link to={'category/Pintura'}><MenuItem value={'Pintura'}>Pintura</MenuItem></Link>
          {console.log('catt' ,cat)}
        </Select>
      </FormControl>
    </Box>
  );
}
