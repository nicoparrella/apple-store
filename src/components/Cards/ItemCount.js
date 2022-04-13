import React,{ useState, useEffect, useContext } from 'react'
import Button from '@mui/material/Button';
import { ProductionQuantityLimits } from '@mui/icons-material';

    const ItemCount = ({addProduct}) => {
    const [click, setClick] = useState(1);

    const addBuy = () => {
        setClick(click + 1);
    };
    
    const removeBuy = () => {
        if (click > 0) {
        setClick(click - 1);
        }
    };

    return (
    <>
        <h4>Compraste: {click}</h4>
        <button onClick={addBuy} className="addBuy">+</button>
        <button onClick={removeBuy} className="removeBuy">-</button>
        <Button onClick={() => addProduct(click)}>Agregar al carrito</Button>
    </>
    );
}

export default ItemCount