import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ListProducts/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material';
import ItemDetailContainer from './components/Items/ItemDetailContainer';


function App() {
  return (
    <ItemDetailContainer/>
    
    // <BrowserRouter>
    //   <NavBar/>
    //     <Routes>
    //       <Route path='/contacto' element={<h1>Pantalla contacto</h1>}/>
    //       <Route path='/home' element={<ItemListContainer/>}/>
    //       <Route path='*' element={<Container><h1>Error 404 - Pagina no encontrada</h1></Container>}/>
    //       <Route path='/productos/:id' element={<ItemListContainer/>}/>
    //     </Routes>
    // </BrowserRouter>
    
  );
}

export default App;