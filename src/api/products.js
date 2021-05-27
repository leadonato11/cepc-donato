// Funciones que simulan la API

import ProductList from "../data/products.json"

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
          resolve(ProductList)
        }, 2000);
    })
}