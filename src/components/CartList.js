import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableFooter
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Table, TableBody, Card } from "@material-ui/core";
import React from "react";
import { CartItem } from "./CartItem";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.grey[300]
    }
}))(TableCell)


export const CartList = ({ items, onRemove, totalPrice }) => {
  return (
    <TableContainer component={Card}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>
              <b>Producto</b>
            </StyledTableCell>
            <StyledTableCell align="center">
              <b>Precio Unit</b>
            </StyledTableCell>
            <StyledTableCell align="center">
              <b>Cantidad</b>
            </StyledTableCell>
            <StyledTableCell align="center">
              <b>Precio Total</b>
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <CartItem key={index} {...item} onRemove={onRemove} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell align="right" colSpan="6">
              <Typography variant="h6" color="textPrimary">Precio Total: <b>${totalPrice}</b></Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
