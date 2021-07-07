import React from "react";
import { Card, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "500px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    objectFit: "cover",
    objectPosition: "center"
  },
  imageOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  title: {
    position: "relative",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "35px",
    fontWeight: "bold",
  },
}));

export const CategoryCard = (props) => {
  const classes = useStyles();

  const history = useHistory()

  return (
    <Card variant="outlined" className={classes.root} onClick={() => history.push(props.link)}>
      <img className={classes.image} alt="" src={props.image} />
      <div className={classes.imageOverlay}></div>
      <Typography className={classes.title} component="h6" variant="h6">
        {props.title}
      </Typography>
    </Card>
  );
};
