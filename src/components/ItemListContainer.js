import { LinearProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      console.log(response);
      setProducts(response);
    });
  }, []);

  return (
    <>
      {products.length > 0 ? <ItemList items={products} /> : <LinearProgress />}
    </>
  );
};

export default ItemListContainer;
