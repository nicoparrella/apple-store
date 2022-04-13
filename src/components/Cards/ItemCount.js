import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import CartContext from '../Context/CartContext';

const ItemCount = ({stock, addProduct}) => {
    
    const {CartsProducts, addProductCart, } = useContext(CartContext)
    
    const initial= 1;
    const [qty, setContador] = useState(1);
    
    
    const ClickSumar = () => {
        setContador (qty +1);
        };
    const ClickRestar= () => {
        setContador (qty -1);
    };   


    return (<div>
        <p> Cantidad: {qty}</p>
        <button onClick={ClickSumar} disabled={qty === stock ? true : false} > Agregar </button>
        <button  onClick={ClickRestar} disabled={qty === initial ? true : false} >Quitar</button>
        <Button onClick={() => addProduct(qty)}>Agregar</Button>
        

        </div>
    )

}

export default ItemCount;