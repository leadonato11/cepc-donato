import React from 'react'
import { useParams } from 'react-router-dom';
import { ProductListContainer } from '../containers/ProductListContainer'; 

export const Category = () => {

    const { categorySlug } = useParams();

    return (
        <ProductListContainer categorySlug={categorySlug} />
    )
}
