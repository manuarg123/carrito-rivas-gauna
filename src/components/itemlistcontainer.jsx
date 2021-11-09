import ItemCount from "./itemCount";



export default function ItemListContainer({greetings}){
    
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
        </div>
    );
        
}