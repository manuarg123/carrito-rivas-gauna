import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import "./BuyCheck.css";
import {
  Timestamp,
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

const BuyCheck = () => {
  const db = getFirestore();

  const ordersCollection = collection(db, "ordenes");

  const { carr, precioTotal } = useContext(CartContext);
  const [cliente, setCliente] = useState([
    {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      localidad: "",
    },
  ]);

  const pedido = {
    buyer: cliente,
    productos: carr,
    total: precioTotal(),
    date: Timestamp.fromDate(new Date()),
  };

  const confirmarPedido = () => {
    addDoc(ordersCollection, pedido).then(({ id }) => {
      alert(
        `Felicidades ${cliente.nombre} ${cliente.apellido} , ha realizado su orden con exito. El ID de su pedido es: ${id}. Pronto nos pondremos en contacto con usted.`
      );
    });
  };

  const eventImputChange = (event) => {
    setCliente({
      ...cliente,
      [event.target.name]: event.target.value,
    });
  };

  const defaultSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='divColor'>
      <h2 className="h2Green">Ingrese sus datos para generar orden:</h2>
      <div className="txtFieldCont">
        <form onSubmit={defaultSubmit}>
          <TextField
            className="fieldSt"
            id="outlined-basic"
            name="nombre"
            label="Nombre/s"
            variant="outlined"
            onChange={eventImputChange}
          />
          <TextField
            className="fieldSt"
            id="outlined-basic"
            name="apellido"
            label="Apellidos/s"
            variant="outlined"
            onChange={eventImputChange}
          />
          <TextField
            className="fieldSt"
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
            onChange={eventImputChange}
          />
          <TextField
            className="fieldSt"
            id="outlined-basic"
            name="telefono"
            label="Teléfono"
            variant="outlined"
            onChange={eventImputChange}
          />
          <TextField
            className="fieldSt"
            id="outlined-basic"
            name="localidad"
            label="Localidad"
            variant="outlined"
            onChange={eventImputChange}
          />
          <Button
            style={{ margin: 10 }}
            variant="contained"
            type="submit"
            onClick={confirmarPedido}
            color='success'
          >
            {" "}
            Enviar{" "}
          </Button>
          <Link to="/Cart" style={{textDecoration:'none'}}>
            <Button style={{ margin: 15 }} variant="contained" color='error'>
              {" "}
              Volver atrás
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default BuyCheck;
