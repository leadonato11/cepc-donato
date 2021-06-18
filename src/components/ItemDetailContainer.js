import { LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../api/products";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState();

  const { id } = useParams() //Obtengo el nro de id de la url

  useEffect(() => {
    getProduct(id).then((response) => {
      console.log(response);
      setProduct(response);
    });
  }, [id]);

  return (
    <div>
      {product ? (
        <ItemDetail
          id={product.id}
          titulo={product.titulo}
          descripcion={product.descripcion}
          stock={product.stock}
          precio={product.precio}
          imagen={product.imagen}
        />
      ) : (
        <LinearProgress />
      )}
    </div>
  );
};
