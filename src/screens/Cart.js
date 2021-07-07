import { Button, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../api/products";
import { CartContext } from "../context/cartContext";
import { CartList } from "../components/CartList";
import { LinearProgress, Container } from "@material-ui/core";
import { createOrder } from "../api/orders";
import Swal from "sweetalert2";

const useStyles = makeStyles({
  btnCart: {
    margin: "10px",
  },
  btnLink: {
    textDecoration: "none",
  },
  btnVaciar: {
    marginBottom: "30px",
  },
  buttons: {
    padding: "20px 0",
  },
  container: {
    padding: "10px 0",
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
  }, [cart]);

  const totalLines = items.map((item) => {
    return item.totalLine;
  });

  const totalPrice =
    totalLines.length > 0
      ? totalLines.reduce((acumulador, totalLine) => acumulador + totalLine)
      : 0;

  function confirmarCompra(name, phone, email) {
    return new Promise((resolve, reject) => {
      const ordenItems = items.map((item) => ({
        id: item.item.id,
        titulo: item.item.titulo,
        precio: item.item.precio,
        cantidad: item.quantity,
      }));

      const ordenCompra = {
        buyer: {
          name,
          phone,
          email,
        },
        items: ordenItems,
        total: totalPrice,
      };
      createOrder(ordenCompra)
        .then((id) => {
          resolve(id);
        })
        .catch((error) => {
          reject();
          console.log(error);
        });
    });
  }

  function finalizarCompra() {
    Swal.fire({
      title: "Finalizar compra",
      html: `<input id="inputName" class="swal2-input" placeholder="Nombre...">
        <input id="inputPhone" class="swal2-input" placeholder="Teléfono...">
        <input id="inputEmail" class="swal2-input" placeholder="Email...">`,
      showLoaderOnConfirm: true,
      showCancelButton: true,
      confirmButtonText: "Finalizar",
      cancelButtonText: "Cancelar",
      allowOutsideClick: false,
      preConfirm: () => {
        const [name, phone, email] = [
          document.getElementById("inputName").value,
          document.getElementById("inputPhone").value,
          document.getElementById("inputEmail").value,
        ];
        return confirmarCompra(name, phone, email);
      },
    })
      .then((response) => {
        if (response.isConfirmed) {
          Swal.fire({
            title: "Compra finalizada",
            html: `Tu compra con el código <b>${response.value}</b> fué realizada con éxito`,
            icon: "success",
            confirmButtonText: "Aceptar",
          });
          clear();
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Hubo un problema al realizar la compra, por favor intenta más tarde.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      });
  }

  function eliminarItem(itemId) {
    Swal.fire({
      title: "¿Estás seguro?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, estoy seguro",
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(itemId);
        Swal.fire({
          icon: "warning",
          title: "Producto eliminado del carrito",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });
  }

  function handleClear() {
    Swal.fire({
      title: "¿Estás seguro?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, estoy seguro",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
        Swal.fire({
          title: "Se ha vaciado el carrito",
          icon: "warning",
          confirmButtonText: "Aceptar",
        });
      }
    });
  }

  console.log(items);

  return (
    <>
      {loading && <LinearProgress />}
      {!loading && (
        <Container maxWidth="md">
          <h2>Este es tu carrito de compras :)</h2>
          {cartEmpty ? (
            <>
              <p>Aquí no hay nada!</p>
              <Link className={classes.btnLink} to="/products">
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
            <div className={classes.container}>
              <CartList
                items={items}
                onRemove={eliminarItem}
                totalPrice={totalPrice}
              />
              <div className={classes.buttons}>
                <Button
                  color="secondary"
                  variant="contained"
                  className={classes.btnCart}
                  onClick={handleClear}
                >
                  Vaciar carrito
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.btnCart}
                  onClick={() => finalizarCompra()}
                >
                  Finalizar compra
                </Button>
                <Link className={classes.btnLink} to="/products">
                  <Button
                    color="primary"
                    variant="outlined"
                    className={classes.btnCart}
                  >
                    Continuar comprando
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </Container>
      )}
    </>
  );
};
