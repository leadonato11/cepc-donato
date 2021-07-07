import { Card, LinearProgress, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { ItemList } from "../components/ItemList";
import Skeleton from "react-loading-skeleton";
import { Paper, Tab, Tabs } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    maxWidth: "1600px",
    margin: "auto",
    padding: "30px 0",
  },
  skeletonCard: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    maxWidth: "345px",
    alignItems: "center",
    margin: "auto"
  },
  buttonContainer: {},
}));

export const ProductListContainer = (props) => {
  const classes = useStyles();

  const history = useHistory()

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categorySlug } = props;

  useEffect(() => {
    getProducts(categorySlug).then((response) => {
      console.log(response);
      setProducts(response);
      setLoading(false);
    });
  }, [categorySlug]);

  const handleChange = (event, newValue) => {
    if (newValue === "todo") {
      return history.push("/products")
    }
    return history.push(`/category/${newValue}`)
  };

  const tabValue = categorySlug || "todo"

  return (
    <>
    {loading && <LinearProgress />}
      <div className={classes.root}>
      {!loading && <div className={classes.buttonContainer}>
        <Paper className={classes.root}>
          <Tabs onChange={handleChange} value={tabValue} indicatorColor="primary" textColor="primary" centered>
            <Tab label="Todos" value="todo" />
            <Tab label="Ellos" value="ellos" />
            <Tab label="Ellas" value="ellas" />
          </Tabs>
        </Paper>
      </div>}
        {!loading && products.length > 0 && categorySlug && (
          <h2>Nuestra indumentaria para {categorySlug}</h2>
        )}
        {!loading && <ItemList items={products} />}
        {loading && (
          <Card className={classes.skeletonCard} elevation={5}>
            <Skeleton height="400px" width="330px" />
            <Skeleton height="50px" width="330px" />
            <Skeleton height="20px" width="150px" />
            <Skeleton height="20px" width="150px" />
          </Card>
        )}
        {products.length === 0 && !loading && <p>Esta categoría no existe!</p>}
      </div>
    </>
  );
};
