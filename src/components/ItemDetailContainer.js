import { LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../api/products";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState();

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        console.log(response);
        setProduct(response);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading && <LinearProgress />}
      {product && !loading && (
        <ItemDetail
          id={product.id}
          titulo={product.titulo}
          descripcion={product.descripcion}
          stock={product.stock}
          precio={product.precio}
          imagen={product.imagen}
        />
      )}
      {!product && !loading && <p>Este producto no existe!</p>}
    </div>
  );
};
