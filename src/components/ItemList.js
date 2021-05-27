import React from 'react';
import { Item } from './Item';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 25,
  }
});

export const ItemList = ({ items }) => {

    const classes = useStyles();    

    return (
        <div className={classes.root}>
         {items.map((product) => 
          <Item key={product.id} id={product.id} titulo={product.titulo} descripcion={product.descripcion} precio={product.precio} stock={product.stock} imagen={product.imagen}/>
        )}
        </div>
    );
};