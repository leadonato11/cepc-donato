import { Button, Card, CardContent, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import ItemCount from './ItemCount';

const useStyles = makeStyles((theme) => ({
    img: {
      maxWidth: "100%",
      margin: 0,
      boxShadow: theme.shadows[2]
    },
    stockText: {
        margin: "10px 0 30px",
    },
    price: {
        fontWeight: "bold",
        margin: "20px 0"
    },
    descripcion: {
        fontStyle: "italic",
    },
    title: {
        margin: "20px 0 0"
    },
    cardLink: {
        textDecoration: "none",
        color: "inherit",
    },

  }));


export const ItemDetail = (props) => {

    const classes = useStyles()
    
    const [ quantity, setQuantity ] = useState(null)
    const {addItem} = useContext(CartContext)

    const handleAdd = (qty) => {
        addItem(props.id, qty)
        setQuantity(qty)
    }
    
    return (
        <Container>
            <Grid container spacing={3} justify="center">
                <Grid item xs={5}>
                    <Grid container spacing={4}>
                        <Grid item xs>
                            <Paper elevation={0}>
                                <img className={classes.img} src={props.imagen} alt={props.descripcion} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={4}>
                        <Grid item xs>
                            <Card>
                            <CardContent>
                                <Typography variant="h3" component="h2" className={classes.title}>
                                    {props.titulo}
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.descripcion}>
                                    {props.descripcion}
                                </Typography>
                                <Typography variant="h2" component="p" className={classes.price}>
                                    ${props.precio}
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.stockText}>
                                    Quedan {props.stock} artículos.
                                </Typography>
                                {!quantity ? <ItemCount onAdd={handleAdd} stock={props.stock} />
                                :
                                <Link to="/cart" className={classes.cardLink}>
                                    <Button variant="outlined" color="primary">Terminar mi compra</Button>
                                </Link>}
                            </CardContent>
                        </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};