import {useState, useContext,useEffect} from 'react';
import {CartContext} from './CartContext';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ItemCart from './ItemCart'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

const Selld = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const Cart = () =>{

    const {carr,precioTotal}=useContext(CartContext);
    
    const {clearCarr}=useContext(CartContext);  
    const [loading, setLoading]=useState(false);
    
    useEffect(() => {
        if(carr.length==0){
            setLoading(true)
        }
    }, [carr])
    console.log('carr:',carr)

     return (
         <div>
            <h1>Soy el Cart</h1>
            
            
            { loading ? <h1>Carrito vacio</h1>:
                <div>
                    <h3>Precio Total de Compra: </h3>
                    <p>$ {precioTotal()}</p>
                 <Button style={{margin:10}} variant="contained" onClick={clearCarr}> Eliminar productos del carrito </Button>
                 <Link to={'/'}><Button style={{margin:10}} variant="contained" > Seguir comprando </Button></Link>
                 <Stack direction="row" spacing={2} styles={{textAling:'center'}}>
                 {
                 carr.map(({cantidad, data})=>(
                     <Selld key={data.id}> 
                     <ItemCart cantidad={cantidad} data={data}/>
                     </Selld>
                 ))
                 }
                 </Stack>
                 </div>
            }
           
            
        </div>
         
    );
}

export default Cart