import { Container } from "@mui/material"
import React from "react"

const ItemDetail = ({title, price, color, img, id,categoria}) => {

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