
import {useParams} from 'react-router-dom'
import ItemDetail from './itemDetail';
import {useState, useEffect} from 'react';
import { getFirestore, getDoc, doc} from 'firebase/firestore';




const ItemDetailContainer = () => {
    const [item, setItem]=useState({});
    const {id}=useParams();
 
    
    useEffect(()=>{
        /*getProducts.then((res)=>{
            setItem(res.find((prod)=>prod.id==id));

            
        }
            
        ); */
        const db= getFirestore();
        
    
        const itemRef=doc(db, 'items', id);
    
    
        getDoc(itemRef).then((snapshot)=>{
          if (snapshot.exists()){
            setItem( {...snapshot.data(), id: snapshot.id});
          }
         
        })
    },[id]);
        
    
    
    return(
        <div>
        <ItemDetail item= {item}></ItemDetail>
        </div>
    );

}

export default ItemDetailContainer;