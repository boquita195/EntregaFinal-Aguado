import './App.css';
import NavBar from './NavBar/NavBar';
import CartWidget from './NavBar/CartWidget';
import ItemListContainer from './NavBar/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar />
     <CartWidget />
     <ItemListContainer /> 
    </div>
    );
}

export default App;
