import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
});

export const Item = ({ titulo, descripcion, precio, stock, imagen}) => {

    const classes = useStyles();

    const handleAdd = (quantity) => {
      console.log(`Se agregaron ${quantity} items al carrito`)
    }

    return (

    <Card elevation={5} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={titulo}
          height="500"
          image={imagen}
          title={titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descripcion}
          </Typography>
          <Typography variant="h6" color="primary" component="p">
            ${precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ItemCount onAdd={handleAdd} stock={stock}/>
      </CardActions>
    </Card>
    );
};