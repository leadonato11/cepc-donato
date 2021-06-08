import { Card, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import ItemCount from './ItemCount';
import { handleAdd } from '../utils/helpers'

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
  }));


export const ItemDetail = (props) => {

    const classes = useStyles()
    
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
                                <ItemCount onAdd={handleAdd} stock={props.stock} />
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};