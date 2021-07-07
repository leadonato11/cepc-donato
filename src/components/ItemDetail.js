import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../context/cartContext";
import ItemCount from "./ItemCount";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    margin: 0,
    boxShadow: theme.shadows[2],
  },
  stockText: {
    margin: "10px 0 30px",
  },
  price: {
    fontWeight: "bold",
    margin: "20px 0",
  },
  descripcion: {
    fontStyle: "italic",
  },
  title: {
    margin: "20px 0 0",
    textTransform: "uppercase",
  },
  cardLink: {
    textDecoration: "none",
    color: "inherit",
  },
  wrapper: {
    margin: "40px auto",
  },
  cardButton: {
    margin: "3px"
  }
}));

export const ItemDetail = (props) => {
  const classes = useStyles();

  const [quantity, setQuantity] = useState(null);
  const { addItem } = useContext(CartContext);

  const handleAdd = (qty) => {
    Swal.fire({
      icon: "success",
      title: "¡Producto añadido!",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    addItem(props.id, qty);
    setQuantity(qty);
  };

  return (
    <Container className={classes.wrapper} spacing={3}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            <Grid item xs>
              <Paper elevation={0}>
                <img
                  className={classes.img}
                  src={props.imagen}
                  alt={props.descripcion}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid container spacing={4}>
            <Grid item xs>
              <Card>
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h2"
                    className={classes.title}
                  >
                    {props.titulo}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.descripcion}
                  >
                    {props.descripcion}
                  </Typography>
                  <Typography
                    variant="h2"
                    component="p"
                    className={classes.price}
                  >
                    ${props.precio}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.stockText}
                  >
                    Quedan {props.stock} artículos.
                  </Typography>
                  {!quantity ? (
                    <ItemCount onAdd={handleAdd} stock={props.stock} />
                  ) : (
                    <div>
                      <Link to="/cart" className={classes.cardLink}>
                        <Button className={classes.cardButton} variant="contained" color="primary">
                          Terminar mi compra
                        </Button>
                      </Link>
                      <Link className={classes.cardLink} to="/products">
                        <Button className={classes.cardButton} color="primary" variant="outlined">
                          Continuar comprando
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
