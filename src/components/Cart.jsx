import { useState, useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

import ItemCart from "./ItemCart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import './Cart.css'
import Grid from '@mui/material/Grid';




const Cart = () => {
  const { carr, precioTotal } = useContext(CartContext);

  const { clearCarr } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (carr.length == 0) {
      setLoading(true);
    }
  }, [carr]);
  console.log("carr:", carr);

  return (
    <div className='itemDiv'>
      <h1>
        Por favor, controle los servicios solicitados para confirmar su orden, eliminar
        servicios o seguir buscando.
      </h1>

      {loading ? (
        <h1>Carrito vacio</h1>
      ) : (
        <div>
          <h3>Costo Total de la orden: </h3>
          <p style={{color:'green', fontSize:'35px'}}>$ {precioTotal()}</p>
          <Button
            style={{ margin: 10 ,backgroundColor:'rgba(255, 0, 0, 0.589)'}}
            variant="contained"
            onClick={clearCarr}
          >
            {" "}
            Eliminar servicios del carrito{" "}
          </Button>
          <Link to={"/cart/check"} style={{textDecoration:'none'}}>
            <Button style={{ margin: 10, textDecoration: 'none' }} variant="contained" color='success'>
              {" "}
              Confirmar Orden{" "}
            </Button>
          </Link>
          <Link to={"/"} style={{textDecoration:'none'}}>
            <Button style={{ margin: 10 }} variant="contained">
              {" "}
              Seguir buscando{" "}
            </Button>
          </Link>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            
          
            {carr.map(({ cantidad, data }) => (
               <Grid  item xs={12} item sm={3}  >
            
                <ItemCart cantidad={cantidad} data={data} key={data.id}/>
              
              </Grid>
            ))}
         
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Cart;
