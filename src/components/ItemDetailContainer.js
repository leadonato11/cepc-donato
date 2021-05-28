import { LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getProduct } from '../api/products';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState()
    
    useEffect(() =>{
    getProduct(props.productId)
      .then((response) => {
        console.log(response)
        setProduct(response)
      })
  }, [props])
    
    
    return (
        <div>
            {product ?
                <ItemDetail id={product.id} titulo={product.titulo} descripcion={product.descripcion} stock={product.stock} precio={product.precio} imagen={product.imagen}/>
                :
                <LinearProgress />}
        </div>
    );
};