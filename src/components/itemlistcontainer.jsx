
import ItemList from "./itemList"

import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react'
import getProducts from '../services/dataypromesa';





export default function ItemListContainer({greetings}){
    const [item, setItem]=useState([]);
    console.log(item);
    const {cat}=useParams();
    
    
    
    useEffect(() => {
        if(cat==='aireacondicionado') {
            setTimeout(() => getProducts.then((res)=>{
                setItem(res.filter((prod)=>prod.categoria==='Aires Acondicionados'));
                } ), 2000)
             
        } else if(cat==='iluminacion'){
            setTimeout(() => getProducts.then((res)=>{
                setItem(res.filter((prod)=>prod.categoria==='Iluminación'));
                } ), 2000)
            
        } else if(cat==='electricidad'){
            setTimeout(() =>getProducts.then((res)=>{
                setItem(res.filter((prod)=>prod.categoria==='Electricidad'));
                } ), 2000)
             
        } else if(cat==='electrodomesticos'){
            setTimeout(() =>getProducts.then((res)=>{
                setItem(res.filter((prod)=>prod.categoria==='Electrodomésticos'));
                } ), 2000)
             
        }  else if(cat==='pintura'){
            setTimeout(() =>getProducts.then((res)=>{
                setItem(res.filter((prod)=>prod.categoria==='Pintura'));
                } ), 2000)
             
        } else if(cat==='todos'){
            setTimeout(() =>getProducts.then((res)=>{
                setItem(res);
                } ), 2000)
            
        }else{
            setTimeout(() =>getProducts.then((res)=>{
                setItem(res);
                } ), 2000)
            
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