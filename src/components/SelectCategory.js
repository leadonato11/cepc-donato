import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { CategoryCard } from "./CategoryCard";
import MenImage from "../assets/images/categories/men.jpeg";
import WomenImage from "../assets/images/categories/women.jpeg";
import AllImage from "../assets/images/categories/all.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    margin: "auto",
    padding: "60px 0",
    paddingTop: "30px",
    maxWidth: "1300px",
  },
  title: {
    marginBottom: "35px",
  },
  categoryContainer: {
    display: "flex",
    position: "relative",
    margin: "auto",
    justifyContent: "space-between",
  },
}));

export const SelectCategory = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography className={classes.title} component="h1" variant="h4">
        ¿Qué vas a elegir hoy?
      </Typography>
      <div className={classes.categoryContainer}>
        <CategoryCard image={MenImage} title="Ellos" link="/category/ellos"/>
        <CategoryCard image={WomenImage} title="Ellas" link="/category/ellas"/>
        <CategoryCard image={AllImage} title="Todos" link="/products"/>
      </div>
    </section>
  );
};
