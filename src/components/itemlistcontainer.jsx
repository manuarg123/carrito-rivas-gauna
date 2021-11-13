import ItemCount from "./itemCount";
import ItemList from "./itemlist"
import {useState, useEffect} from 'react'
import getProducts from "../services/dataypromesa";
export default function ItemListContainer({greetings}){
    
    
    const [productos, setProductos]=useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            getProducts
            .then(ans=>{
                setProductos(ans);
                console.log(ans)
            })
        }, 2000)
       
        
    },[]);
    
    
    const onAdd=(count)=>{

   
        if(count>1){
            alert(`Se agregaron ${count} productos`)
        } else if(count===1){
            alert(`Se agrego ${count} producto`)
        }

    }
    return(
        <div>
        <h1>{greetings} </h1>
        <p> Bienvenidos a la página de CasaFix Norte. Podrá encontrar un catálogo de nuestros servicios y contactar con profesionales para presupuestar los servicios requeridos</p>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
        <ItemList items={productos}/>
        </div>
    );
        
}