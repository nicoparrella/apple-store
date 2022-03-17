import './App.css';
import NavBar from './components/NavBar/NavBar'
import ListProducts from './components/ListProducts/ListProducts';

function App() {
  return (
    <div>
      <NavBar/>
      <ListProducts>
        <p>New Products</p>
      </ListProducts>
      <ListProducts>
        <p>Ofertas</p>
      </ListProducts>
    </div>
  );
}

export default App;