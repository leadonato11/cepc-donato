import { makeStyles } from "@material-ui/core";
import React from "react";
import bannerImage from "../assets/images/slides/foto04.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    maxWidth: "1600px",
    height: "300px",
    margin: "auto"
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    objectFit: "cover",
    objectPosition: "0 -450px"
  },
}));

export const Gallery = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} alt="" src={bannerImage} />
    </div>
  );
};
