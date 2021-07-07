import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#152548",
    color: "#969696",
    boxSizing: "border-box"
  },
  link: {
    color: "inherit",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography component="p">
        Trabajo final de Ecommerce para{" "}
        <Link className={classes.link} href="https://www.coderhouse.com/">
          Coderhouse
        </Link>{" "}
        en React JS. Realizado por{" "}
        <Link
          className={classes.link}
          href="https://www.github.com/leadonato11"
        >
          Leandro Donato
        </Link>
        . Julio 2021.
      </Typography>
    </footer>
  );
};
