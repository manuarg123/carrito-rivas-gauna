
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer';
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/navbar/navBar';
import Cart from './components/Cart'
import {Routes, Route} from 'react-router-dom';






function App() {
 

  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element= {<ItemListContainer greetings="Mantenimiento del hogar"   />} />
      <Route path='item/:id' element= {<ItemDetailContainer  />} />
      <Route path='category/:cat' element= {<ItemListContainer  />} />
      <Route path='/cart' element= {<Cart  />} />
      </Routes>
      
    </div>
      
      
      
  );
}

export default App;
