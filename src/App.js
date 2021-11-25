
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer';
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/navbar/navBar';
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom';
import axios from 'axios'





function App() {
  const [productos, setProductos]=useState([]);
//const [objetos, setObjetos]=useState({});


const getProductsAxios= async () => {
  const getAxios= await axios.get('./dataList.json');
  const responseAxios= getAxios.data;
  setProductos(responseAxios);
  //setObjetos(responseAxios[15]);
  
}

useEffect(()=>{
  setTimeout(()=>getProductsAxios(), 2000); },[]);

  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element= {<ItemListContainer greetings="Mantenimiento del hogar" products={productos}  />} />
      <Route path='item/:id' element= {<ItemDetailContainer  />} />
      <Route path='category/:cat' element= {<ItemListContainer  />} />
      </Routes>
      
    </div>
      
      
      
  );
}

export default App;
