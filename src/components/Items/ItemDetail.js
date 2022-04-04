import { Container } from "@mui/material"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from "react"
import CardsProducts from "../Cards/CardsProducts"
import ItemListProduct from './ItemListProduct'

const ItemDetail = ({}) => {
    const {id} = useParams()
    const [data, setProduct] = useState({})

    useEffect( () => {
        filterProductById(ItemListProduct, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }
    return(
        <Container>
            <img src={`/${data.img}`} alt= {'iphone'}></img>
            <h1>{data.title}</h1>
            <h2>${data.price}</h2>
            <h3>Color: {data.color}</h3>
            <CardsProducts/>
        </Container>
    )
}

export default ItemDetail