import { Badge, IconButton, MenuItem } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import "../styles/NavBar.css";

const CartWidget = () => {

  const {cantItemsInCart} = useContext(CartContext)
  if (cantItemsInCart === 0) {
    return null
  }
  
  return (
    <MenuItem>
      <IconButton aria-label={`Hay ${cantItemsInCart} en el carrito`} color="inherit">
        <Badge badgeContent={cantItemsInCart} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </MenuItem>
  );
};

export default CartWidget;
