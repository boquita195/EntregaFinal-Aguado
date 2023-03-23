import React, { useState, useEffect } from 'react';
import productos from '../../Productos/Products';
import ItemList from './ItemList';
import './items.css';
import { useParams } from 'react-router-dom';
import {collection, doc, getDocs} from 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

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


 async function getItemsFromDataBase(){
 const productosCollectionRef = collection(db, "productos");
 let snapshotProductos = await getDocs(productosCollectionRef);
 const documents = snapshotProductos.docs;
 
const dataProductos = documents.map((doc) => {
  const Productos = doc.data();
  productos.id = doc.id;
  return Productos;
})

return dataProductos;
 }



/* function getItemsFromDataBase() {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error === true) reject("Error leyendo los datos");
      resolve(productos);
    }, 2000);
  });
} */

function getItemsByCategoriaFromDataBase(categoriaURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productosFiltered = productos.filter(item => item.categoria === categoriaURL)
      resolve(productosFiltered);
    }, 2000);
  });
}

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const params = useParams();
  const idCategoria = params.idCategoria;

  async function leerDatos() {
    if (idCategoria) {
      let respuesta = await getItemsByCategoriaFromDataBase(idCategoria);
      setProductos(respuesta);
    } else {
      let respuesta = await getItemsFromDataBase();
      setProductos(respuesta);
    }
  }

  useEffect(() => {
    leerDatos();
  }, [idCategoria]);

  return (
    <div className='zapatillas'>
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
