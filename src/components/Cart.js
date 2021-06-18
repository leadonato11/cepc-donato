import { Button, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../api/products";
import { CartContext } from "../context/cartContext";
import { CartList } from "./CartList";
import { LinearProgress, Container } from "@material-ui/core";

const useStyles = makeStyles({
  btnVaciar: {
    marginTop: 20,
    marginBottom: 20,
  },
  btnLink: {
    textDecoration: "none",
  }
});

export const Cart = () => {

  const classes = useStyles();

  const { cart, removeItem, clear, cartEmpty } = useContext(CartContext);

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cartItems = cart.map(async (cartItem) => {
      const item = await getProduct(cartItem.id);
      return {
        item,
        quantity: cartItem.quantity,
        totalLine: item.precio * cartItem.quantity,
      };
    });

    Promise.all(cartItems).then((cartProducts) => {
      setItems(cartProducts);
      setLoading(false);
    });
  }, []);

  const totalLines = items.map((item) => {
    return item.totalLine;
  });

  const totalPrice =
    totalLines.length > 0
      ? totalLines.reduce((acumulador, totalLine) => acumulador + totalLine)
      : 0;

  return (
    <>
      {loading && <LinearProgress />}
      {!loading && (
        <Container maxWidth="md">
          <h2>Este es tu carrito de compras :)</h2>
          {cartEmpty ? (
            <>
              <p>Aquí no hay nada!</p>
              <Link className={classes.btnLink} to="/">
              <Button
                color="primary"
                variant="contained"
                className={classes.btnVaciar}
              >
                Ir a la tienda
              </Button>
              </Link>
            </>
          ) : (
            <>
              <CartList
                items={items}
                onRemove={removeItem}
                totalPrice={totalPrice}
              />
              <Button
                color="secondary"
                variant="contained"
                className={classes.btnVaciar}
                onClick={() => clear()}
              >
                Vaciar carrito
              </Button>
            </>
          )}
        </Container>
      )}
    </>
  );
};
