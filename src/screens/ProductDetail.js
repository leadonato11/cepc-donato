import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetailContainer } from '../containers/ProductDetailContainer'

export const ProductDetail = () => {

    const { id } = useParams();

    return (
        <ProductDetailContainer productId={id}/>
    );
};