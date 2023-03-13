import './App.css';
import ItemListContainer from './Components/Items/ItemListContainer';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';




function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />

        <Routes> 
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
        <Route path='/Detalle' element={<ItemDetailContainer />}/>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />}/>
 
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;