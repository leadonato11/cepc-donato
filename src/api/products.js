
import ProductList from "../data/products.json"
import { getFirestore, getFromStorage } from '../firebase';


const db = getFirestore()
const itemCollection = db.collection("items")

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        itemCollection.get().then(querySnapshot => {
          if (querySnapshot.empty) {
            console.log("No hay productos!!")
          }
          const itemsPromise = querySnapshot.docs.map(doc => {
            const docData = doc.data()
            const itemImage = getFromStorage(docData.imagen).then(imageURL => {
              return {
                id: doc.id,
                ...docData,
                imagen: imageURL
              }
            })
            return itemImage
          })
          Promise.all(itemsPromise).then(items => {
            resolve(items)
          })
        }).catch(error => {
          console.log("Error de firebase", error)
          reject(error)
        })
    })
}

// Función que simula la API para obtener UN item

export const getProduct = (id) => {
  return new Promise ((resolve, reject) => {
    itemCollection.doc(id).get().then(doc => {
      if (!doc.exists) {
        return reject("El item no existe")
      }
      const docData = doc.data()
      getFromStorage(docData.imagen).then(imageURL => {
        resolve({
          id: doc.id,
          ...docData,
          imagen: imageURL
        })
      })
    }).catch(error => {
      console.log("Error de firebase", error)
      reject(error)
    })
  })
}