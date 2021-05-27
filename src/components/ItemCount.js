import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    counterCointainer: {
        backgroundColor: "#f7f7f7",
        maxWidth: "250px",
        padding: "10px",
        alignContent: "center",
        margin: "auto"
    },
    counter: {
        border: "2px solid #CFCFCF",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "5px",
        margin: "10px 0"
    },
    buttons: {
        fontSize: "20px",
        fontWeight: "bold"
    }
  }));


function ItemCount({ stock, initial, onAdd }) {

    const classes = useStyles()
    const [contador, setContador] = useState(initial || 1) // lo mismo a hacer initial ? initial : 1

    const handleAdd = () => {
        if(contador < stock) {
            setContador(contador+1)
        }
    }

    const handleSubstract = () => {
        if(contador > 1) {
            setContador(contador-1)
        }
    }

    const handleAddToCart = () => {
        if(contador <= stock) {
            onAdd(contador)
        }
    }
 
    return (
        <div className={classes.counterCointainer}>
            <div className={classes.counter}>
                <Button className={classes.buttons} color="primary" onClick={handleSubstract}>-</Button>
                <span>{contador}</span>
                <Button className={classes.buttons} color="primary" onClick={handleAdd}>+</Button>
            </div>
            <div>
                <Button onClick={handleAddToCart} variant="outlined" color="primary">Agregar al carrito</Button>
            </div>
        </div>
    );
}

export default ItemCount;