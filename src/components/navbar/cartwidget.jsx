import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export default function CartWidget(){
    return (
        <IconButton
                size="large"
                aria-label="show 5 new products in the cart"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
                <Badge badgeContent={5} color="error">
                
             
                <AddShoppingCartIcon />
                </Badge>
              </IconButton>
    );
}