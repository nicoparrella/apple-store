import { useState } from 'react';
import Button from '@mui/material/Button';

const ItemCount = ({stock, addProduct}) => {
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