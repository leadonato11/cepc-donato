import { Badge, IconButton, MenuItem } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import "../styles/NavBar.css";

export const CartWidget = () => {

  const {cantItemsInCart} = useContext(CartContext)
  
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