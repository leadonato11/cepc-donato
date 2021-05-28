// Funciones que simulan la API

import ProductList from "../data/products.json"

// Función que simula la API para obtener todos los items

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
          resolve(ProductList)
        }, 2000);
    })
}

// Función que simula la API para obtener UN item

export const getProduct = (id) => {
  return new Promise ((resolve) => {
      setTimeout(() => {
        const product = ProductList.find(product => product.id === id)
        resolve(product)
      }, 2000);
  })
}