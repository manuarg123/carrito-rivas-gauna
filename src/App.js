
import './App.css';
import ItemListContainer from './components/itemlistcontainer';
import NavBar from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="Mantenimiento del hogar"/>
    </div>
      
      
      
  );
}

export default App;
