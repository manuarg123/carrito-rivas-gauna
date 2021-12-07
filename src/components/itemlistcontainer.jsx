
import ItemList from "./itemList"

import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react'

import { getFirestore, getDocs,collection,query,where} from 'firebase/firestore';




export default function ItemListContainer({greetings}){
    
    

    
    
    
    const [item, setItem]=useState([]);
    
    const {cat}=useParams();

    const [loading, setLoading]=useState(true)
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },5000)
    }, []);
    useEffect(()=>{
        if(!cat || cat==='todos'){
          const db=getFirestore();
    
        const itemColection=collection(db, 'items');
  
        
        
        getDocs(itemColection).then((snapshot)=>{
          
        setItem(snapshot.docs.map((doc)=>({
          
          id: doc.id, ...doc.data()
        })));  
        });
        
      }else{
        const db=getFirestore();
    
        const itemColection=collection(db, 'items');
  
        const q= query(itemColection, where('categoria', '==', cat));
        
        getDocs(q).then((snapshot)=>{
          
        setItem(snapshot.docs.map((doc)=>({
          
          id: doc.id, ...doc.data()
        
        })));  
        });
      }
      }, [cat]);
    
    
    /*  useEffect(() => {
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
    }, [cat])*/

    
    return(
        <div>
        <h1>{greetings} </h1>
        <p> Bienvenidos a la página de CasaFix Norte. Podrá encontrar un catálogo de nuestros servicios y contactar con profesionales para presupuestar los servicios requeridos</p>
        
        {loading? <h2>Cargando...</h2>:<ItemList  items={item}/>}
        </div>
    );
        
}