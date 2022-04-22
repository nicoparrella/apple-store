import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ListProducts/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material';
import { CartProvider } from './components/Context/CartContext'
import CartPage from './Cart/CartPage';
import ItemDetailContainer from './components/Items/ItemDetailContainer';

function App() {
  return (
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path='/product/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/contacto' element={<div><h1>Pantalla contacto</h1><h2>Proximamente</h2></div>} />
              <Route path='/nosotros' element={<div><h1>Pantalla nosotros</h1><h2>Proximamente</h2></div>}/>
              <Route path="*" element={<Container><h1>Error 404 - Pagina no encontrada</h1></Container>} />
              </Routes>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;