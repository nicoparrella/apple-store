import { Alert, Container } from "@mui/material"
import { useParams } from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import React from "react"
import ItemCount from "../Cards/ItemCount"
import ItemListProduct from './ItemListProduct'
import CartContext from '../Context/CartContext';

const ItemDetail = (product) => {

    const { title,img,price,color} = product
    
    return(
        <Container className="card-ind">
            <img src={`/${img}`} alt= {'iphone'}></img>
            <h1>{title}</h1>
            <h2>${price}</h2>
            <h3>Color: {color}</h3>
        </Container>
    )
}

export default ItemDetail