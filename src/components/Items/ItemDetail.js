import { Container } from "@mui/material"
import React from "react"
import CardsProducts from "../Cards/CardsProducts"

const ItemDetail = ({data}) => {
    return(
        <Container>
            <img src={data.img} alt= 'iphone'></img>
            <h1>{data.title}</h1>
            <h2>${data.price}</h2>
            <h3>Color: {data.color}</h3>
            <CardsProducts/>
        </Container>
    )
}

export default ItemDetail