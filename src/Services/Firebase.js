import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  doc,
  collection,
  writeBatch,
} from "firebase/firestore";
/* import products from "../products/products";
 */import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAAN0MjZ7dvX2MhXSXq9HKNUesXIjzOR9Q",
  authDomain: "entergafinal.firebaseapp.com",
  projectId: "entergafinal",
  storageBucket: "entergafinal.appspot.com",
  messagingSenderId: "1018871073556",
  appId: "1:1018871073556:web:177145eaf6773ebb68d001",
  measurementId: "G-NC8QKTLSZP"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");

  console.log(orderData);

  const response = await addDoc(collectionRef, orderData);
  console.log("Orden creada correctamente", response.id);

  return response.id;
}
export async function exportData() {
    
    const collectionRef = collection(db, "products");
  
    for (let item of products) {
      const { id } = await addDoc(collectionRef, item);
      console.log("Documento creado", id);
    }
  }
  
  async function exportDataWithBatch() {
    const batch = writeBatch(db);
    const collectionRef = collection(db, "products");
  
    for (let item of products) {
      const newDoc = doc(collectionRef);
      batch.set(newDoc, item);
    }
  
    const resp = await batch.commit();
    console.log(resp);
  }


  export {createOrder};
  export {exportDataWithBatch};