import "./items.css";
import { useState, useEffect, useContext } from "react";
import productos from "../../Productos/Products";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import cartContext from "../../Context/CartContext";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

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


async function getSingleItemFromDataBaseXX(idItem){
const productosCollectionRef = collection(db, "productos");  
const docRef = doc(productosCollectionRef, )
}


function getSingleItemFromDataBase(idItem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let encontrado = productos.find((item) => item.id === Number(idItem));
      resolve(encontrado);
    }, 2000);
  });
}

function ItemDetailContainer() {
  const [productos, setProductos] = useState({});
  const [cartItems, setCartItems] = useState();

  const params = useParams();
  const idUser = params.idUser;

  useEffect(() => {
    getSingleItemFromDataBase(idUser).then((respuesta) => {
      setProductos(respuesta);
    });
  }, [idUser]);

  const {addItem} = useContext(cartContext);

 function onAddToCart(count){
  alert('Agregaste ${count} al carrito');
  addItem(productos, count)
 }

  return (
    <>
      <div className="item-list-container">
        <ul className="item-list">
          <li className="item-card" key={productos.id}>
            <img src={productos.avatar} alt={productos.nombre} />
            <h4>{`${productos.nombre} ${productos.detalle}`}</h4>
            <small>{productos.categoria}</small>
            <p>{`$${productos.precio}`}</p>
           
            <ItemCount 
            onAddToCart={onAddToCart}
            initial={0}  
            stock={productos.stock} />
          </li> 
        </ul>
      </div>
    </>
  );
}

export default ItemDetailContainer;
