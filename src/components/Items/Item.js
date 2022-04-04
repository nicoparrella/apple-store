import React from 'react';
import CardsProducts from '../Cards/CardsProducts';
import { Link } from "react-router-dom";

const Item = ({title, price, color, img, id}) => {
    return (
        <article>
            <img src={`./${img}`} alt={{img}}/>
            <h1>{title}</h1>
            <h2>${price}</h2>
            <h3>Color: {color}</h3>
            <Link to={`/productos/${id}`}><button className="verProducto">Ver</button></Link>
            <CardsProducts/>
        </article>
    )
}

export default Item;
