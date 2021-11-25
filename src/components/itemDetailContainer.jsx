
import {useParams} from 'react-router-dom'
import ItemDetail from './itemDetail';
import {useState, useEffect} from 'react';
import getProducts from '../services/dataypromesa';




const ItemDetailContainer = () => {
    const [item, setItem]=useState({});
    const {id}=useParams();
 
    
    useEffect(()=>{
        getProducts.then((res)=>{
            setItem(res.find((prod)=>prod.id==id));

            
        }
            
        ); 
    
    },[id]);
        
    
    
    return(
        <div>
        <ItemDetail item= {item}></ItemDetail>
        </div>
    );

}

export default ItemDetailContainer;