import "./Cards.css";
import React, { useState } from "react";

export default function Cards({ tittle, price, color }) {
    const [click, setClick] = useState(0);
    const [fecha, setFecha] = useState(new Date().toLocaleString());

    const addBuy = () => {
        setClick(click + 1);
        setFecha(new Date().toLocaleString());
    };
    const removeBuy = () => {
        if (click > 0) {
        setClick(click - 1);
        setFecha(new Date().toLocaleString());
        }
    };

    return (
    <div className="card">
        <h1>{tittle}</h1>
        <h2>${price}</h2>
        <h3>Color: {color}</h3>
        <h4>Compraste: {click}</h4>
        <p>Fecha: {fecha}</p>
        <button onClick={addBuy} className="addBuy">Comprar</button>
        <button onClick={removeBuy} className="removeBuy">Quitar Compra</button>
    </div>
    );
}
