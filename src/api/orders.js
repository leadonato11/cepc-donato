import firebase from "firebase";
import { getFirestore } from '../firebase';


const db = getFirestore()
const orderCollection = db.collection("orders")

export const createOrder = (order) => {
  return new Promise((resolve, reject) => {
    const now = firebase.firestore.Timestamp.fromDate(new Date());
    const newOrder = {
      ...order,
      date: now,
    };
    orderCollection.add(newOrder).then(({ id }) => {
      console.log("Se creo la orden ID: ", id)
      resolve(id)
    }).catch(error => {
      reject(error)
    })
  })
};
