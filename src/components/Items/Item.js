import React from 'react';
import CardsProducts from '../Cards/CardsProducts';

const Item = ({title, price, color, img}) => {
    return (
        <article>
            <img src={`./${img}`} alt={{img}}/>
            <h1>{title}</h1>
            <h2>${price}</h2>
            <h3>Color: {color}</h3>
            <CardsProducts/>
        </article>
    )
}

export default Item;
