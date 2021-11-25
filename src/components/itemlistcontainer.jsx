import ItemCount from "./itemCount";
import ItemList from "./itemList"
import onAdd from './funcionCount'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react'
import getProducts from '../services/dataypromesa';




/*
    import {Routes, Route} from 'react-router-dom'
import ItemFilterAc from "./itemFilterAc";
import ItemFilterIluminacion from "./itemFilterIluminacion";
import ItemFilterElectricidad from "./itemFilterElectricidad";
import ItemFilterElectrodomesticos from "./itemFilterElectrodomesticos";
import ItemFilterPintura from "./itemFilterPintura";
import {Link} from 'react-router-dom';

  <Link to={'category/ac'}><h2>Aire Acondicionado</h2></Link>
        <Link to={'category/iluminacion'}><h2>Iluminación</h2></Link>
        <Link to={'category/electricidad'}><h2>Electricidad</h2></Link>
        <Link to={'category/electrodomesticos'}><h2>Electrodomésticos</h2></Link>
        <Link to={'category/pintura'}><h2>Pintura</h2></Link>
        <Routes>
        <Route path='category/ac' element= {<ItemFilterAc items={products} />} />
        <Route path='category/iluminacion' element= {<ItemFilterIluminacion items={products} />} />
        <Route path='category/electrodomesticos' element= {<ItemFilterElectrodomesticos items={products} />} />
        <Route path='category/electricidad' element= {<ItemFilterElectricidad items={products} />} />
        <Route path='category/pintura' element= {<ItemFilterPintura items={products} />} />
        
        </Routes>


*/


export default function ItemListContainer({greetings, products}){
    const [item, setItem]=useState([]);
    console.log(item);
    const {cat}=useParams();
    console.log(useParams())
    console.log('cat de itemlist', cat)
    /*useEffect(()=>{
        if(cat==='aireacondicionado')
                         getProducts.then((res)=>{
                          setItem(res.filter((prod)=>prod.categoria=='Aires Acondicionados'));
         }

        ); 
    
    },[cat]); */
    
    useEffect(() => {
        if(cat==='aireacondicionado') {
            getProducts.then((res)=>{
                setItem(res.filter((prod)=>prod.categoria==='Aires Acondicionados'));
                } ); 
        } else if(cat==='iluminacion'){
            getProducts.then((res)=>{
                setItem(res.filter((prod)=>prod.categoria==='Iluminación'));
                } ); 
        } else if(cat==='electricidad'){
            getProducts.then((res)=>{
                setItem(res.filter((prod)=>prod.categoria==='Electricidad'));
                } ); 
        } else if(cat==='electrodomesticos'){
            getProducts.then((res)=>{
                setItem(res.filter((prod)=>prod.categoria==='Electrodomésticos'));
                } ); 
        }  else if(cat==='pintura'){
            getProducts.then((res)=>{
                setItem(res.filter((prod)=>prod.categoria==='Pintura'));
                } ); 
        } else if(cat==='todos'){
            getProducts.then((res)=>{
                setItem(res);
                } ); 
        }else{
            getProducts.then((res)=>{
                setItem(res);
                } ); 
        }
    }, [cat])

    
    return(
        <div>
        <h1>{greetings} </h1>
        <p> Bienvenidos a la página de CasaFix Norte. Podrá encontrar un catálogo de nuestros servicios y contactar con profesionales para presupuestar los servicios requeridos</p>
        
        <ItemList  items={item}/>
        </div>
    );
        
}