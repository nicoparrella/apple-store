import React, { useState } from "react";

    const CardsProducts = () => {
    const [click, setClick] = useState(0);
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
        <button onClick={addBuy} className="addBuy">Comprar</button>
        <button onClick={removeBuy} className="removeBuy">Quitar Compra</button>
    </>
    );
}

export default CardsProducts