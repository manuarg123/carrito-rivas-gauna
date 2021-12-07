
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer';
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/navbar/navBar';
import Cart from './components/Cart'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { CartProvider } from './components/CartContext';
//import {useState, useEffect} from 'react';
//import { getFirestore, getDocs,collection,query,where} from 'firebase/firestore';




function App() {
 /* const [allPro, setAllPro]= useState(null);

  useEffect(()=>{
    const db=getFirestore();

    const itemColection=collection(db, 'items');
    const q= query(itemColection, where('categoria', '==', 'Aires Acondicionados'))
    getDocs(q).then((snapshot)=>{
      
    setAllPro(snapshot.docs.map((doc)=>({
      
      id: doc.id, ...doc.data()
    })));  
    });
  }, []);



  /*const [pro, setPro] = useState(null);
 ]
  useEffect(()=>{
    const db= getFirestore();
    console.log('el db:', db)

    const aireRef=doc(db, 'items', 'L7Naygc1QE3JXGDZuVtk');

    console.log(' aireRef:', aireRef);

    getDoc(aireRef).then((snapshot)=>{
      if (snapshot.exists()){
        setPro( {...snapshot.data(), id: snapshot.id});
      }
     
    })
  }, []);
  console.log('El pro: ',pro); */

  //console.log('el pros: ', allPro)
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element= {<ItemListContainer greetings="Mantenimiento del hogar"   />} />
      <Route path='item/:id' element= {<ItemDetailContainer  />} />
      <Route path='category/:cat' element= {<ItemListContainer  />} />
      <Route path='/cart' element= {<Cart  />} />
      
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
      
      
      
  );
}

export default App;
