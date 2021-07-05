import { LinearProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/products";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categorySlug } = useParams()

  useEffect(() => {
    getProducts(categorySlug).then((response) => {
      console.log(response);
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h2>Nuestra indumentaria para ellos</h2>
      {!loading ? <ItemList items={products} /> : <LinearProgress />}
      {products.length === 0 && !loading && <p>Esta categoría no existe!</p>}

      <h2>¿Por qué elegir nuestra indumentaria?</h2>
      <p>
        Hoy en día, las remeras para hombre se han convertido en una prenda que
        debe cumplir ciertos requisitos:
      </p>
      <p>Comodidad</p>
      <p>
        Normalmente llevamos una vida muy acelerada y no queremos que la
        transpiración detenga nuestra actividad. Por eso nuestra ropa tiene
        sistemas que permiten que nuestro cuerpo respire a través de la prenda, aún cuando
        estamos quietos, sin arruinar nuestro momento.
      </p>
      <p>Calidad</p>
      <p>
        Es obvio que mientras mas usamos nuestra remera, más desgaste va a
        sufrir, pero si tu remera posee una tela de calidad, el tiempo no
        afectará la calidad de tu indumentaria de Puro Campeón
      </p>
      <p>EVOLUCIONÁ CON LA INDUMENTARIA DE PURO CAMPEÓN</p>
    </>
  );
};

export default ItemListContainer;
