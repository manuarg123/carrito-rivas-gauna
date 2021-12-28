import * as React from "react";

import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";
import "./navBar.css";

export default function BasicSelect() {
  

  return (
    
    <ul className='headUlStyle'>
    <li className='headLiStyle'> <Link className='menuStyle' to={"category/Aires Acondicionados"}>
              <MenuItem value={"Aires Acondicionados"}>Aire Acondicionado</MenuItem>
            </Link></li>
    <li className='headLiStyle'><Link className='menuStyle' to={"category/Iluminación"}>
              
              <MenuItem value={"Iluminación"}>Iluminación</MenuItem>
            </Link></li>
    <li className='headLiStyle'> <Link className='menuStyle' to={"category/Electricidad"}>
              
              <MenuItem value={"Electricidad"}>Electricidad</MenuItem>
            </Link></li>
    <li className='headLiStyle'><Link className='menuStyle' to={"category/Electrodomésticos"}>
              <MenuItem value={"Electrodomésticos"}>Electrodomésticos</MenuItem>
            </Link></li>
    <li className='headLiStyle'><Link className='menuStyle' to={"category/Pintura"}>
              <MenuItem value={"Pintura"}>Pintura</MenuItem>
            </Link></li>
    </ul>
  );
}
/*
const [cat, setCat] = React.useState("");
  console.log(cat);
  const handleChange = (event) => {
    setCat(event.target.value);
  };
<FormControl className="formSelect">
      <InputLabel id="demo-simple-select-label">Servicios</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={cat}
        label="Categoria"
        className="selectStyle "
        onChange={handleChange}
      >
        <Link className='menuStyle' to={"category/todos"}>
          <MenuItem value={"Todas"}>Todas</MenuItem>
        </Link>
        <Link className='menuStyle' to={"category/airesAcondicionados"}>
          <MenuItem value={"Aires Acondicionados"}>Aire Acondicionado</MenuItem>
        </Link>
        <Link className='menuStyle' to={"category/Iluminacion"}>
          <MenuItem value={"Iluminacion"}>Iluminacion</MenuItem>
        </Link>
        <Link className='menuStyle' to={"category/Electricidad"}>
          {" "}
          <MenuItem value={"Electricidad"}>Electricidad</MenuItem>
        </Link>
        <Link className='menuStyle' to={"category/Electrodomesticos"}>
          <MenuItem value={"Electrodomésticos"}>Electrodomésticos</MenuItem>
        </Link>
        <Link className='menuStyle' to={"category/Pintura"}>
          <MenuItem value={"Pintura"}>Pintura</MenuItem>
        </Link>
      </Select>
    </FormControl>


*/