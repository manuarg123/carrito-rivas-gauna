import ItemList from "./itemList";
import CardMedia from '@mui/material/CardMedia';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './itemListContainer.css'
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer({ greetings }) {
  const [item, setItem] = useState([]);

  const { cat } = useParams();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  useEffect(() => {
    if (!cat || cat === "todos") {
      const db = getFirestore();

      const itemColection = collection(db, "items");

      getDocs(itemColection).then((snapshot) => {
        setItem(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
    } else {
      const db = getFirestore();

      const itemColection = collection(db, "items");

      const q = query(itemColection, where("categoria", "==", cat));

      getDocs(q).then((snapshot) => {
        setItem(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
    }
  }, [cat]);


  return (
    <div className='contenedorPrincipal'>
      <h1 className='txtH1'>{greetings} </h1>
      <CardMedia
          component="img"
          height="300"
          image='https://hostimage22.000webhostapp.com/imagenes/mantimage.png'
          
        />
      <p className='txtFormat'>
        {" "}
        Bienvenidos a la página de CasaFix-Cba. Somos una empresa dedicada a brindar servicios para el mantenimiento y  reparaciones del hogar. Podrá encontrar un catálogo de
        nuestros servicios, y los costos aproximados. Solicite una orden con los servicios requeridos y nos pondremos en contacto, para comenzar la mejora de su hogar.
      </p>

      {loading ? <h2>Cargando...</h2> : <ItemList  items={item} />}
    </div>
  );
}
