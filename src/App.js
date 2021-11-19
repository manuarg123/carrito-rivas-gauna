
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer';
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/navbar/navbar';
import {useState, useEffect} from 'react'
import getProducts from './services/dataypromesa'




function App() {
  const [productos, setProductos]=useState([]);
const [objetos, setObjetos]=useState({});

useEffect(()=>{
  setTimeout(()=>{
      getProducts
      .then(ans=>{
          setProductos(ans);
          setObjetos(ans[1]);
      })
  }, 2000)
 
  
},[]);
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="Mantenimiento del hogar" products={productos}/>

      <ItemDetailContainer  objectz={objetos}/>
    </div>
      
      
      
  );
}

export default App;
