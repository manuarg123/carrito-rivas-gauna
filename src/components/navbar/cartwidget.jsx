import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import {useContext} from 'react'
import {CartContext} from '../CartContext';

export default function CartWidget(){
  const {prods}=useContext(CartContext);
    return (
        <IconButton
                size="large"
                aria-label="show 5 new products in the cart"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
                <Badge badgeContent={prods} color="error">
                
             
                <AddShoppingCartIcon />
                </Badge>
              </IconButton>
    );
}