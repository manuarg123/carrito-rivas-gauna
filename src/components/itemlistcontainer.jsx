import ItemCount from "./itemCount";
import ItemList from "./itemList"
import onAdd from './funcionCount'
export default function ItemListContainer({greetings, products}){
    
    
    
    
    
    
    return(
        <div>
        <h1>{greetings} </h1>
        <p> Bienvenidos a la página de CasaFix Norte. Podrá encontrar un catálogo de nuestros servicios y contactar con profesionales para presupuestar los servicios requeridos</p>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
        <ItemList items={products}/>
        </div>
    );
        
}