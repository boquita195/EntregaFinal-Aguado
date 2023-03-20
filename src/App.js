import './App.css';
import ItemListContainer from './Components/Items/ItemListContainer';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import cartContext, { CartContextProvider } from './Context/CartContext';





function App() {
  return (
    <div className="container">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes> 
        <Route path='/Categoria/:idCategoria' element={<ItemListContainer />}/>
        <Route path='/Detalle/:idUser' element={<ItemDetailContainer />}/>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />}/>
 
       </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;