import { Avatar, IconButton, TableRow, TableCell, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

const useStyles = makeStyles({
  title: {
    textTransform: "uppercase",
  }
});

export const CartItem = ({ item, quantity, totalLine, onRemove }) => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell>
        <Avatar alt={item.titulo} src={item.imagen} />
      </TableCell>
      <TableCell className={classes.title}>{item.titulo}</TableCell>
      <TableCell align="center">${item.precio}</TableCell>
      <TableCell align="center">{quantity}</TableCell>
      <TableCell align="center">${totalLine}</TableCell>
      <TableCell>
        <IconButton
          onClick={() => onRemove(item.id)}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
