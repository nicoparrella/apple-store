import React from "react"
import { useState, useEffect } from "react";
import ItemListProduct from "./ItemListProduct";
import ItemDetail from "./ItemDetail";
import Container from "@mui/material/Container"

const ItemDetailContainer = ({item}) => {
    const [itemElegido, setItemElegido] = useState([]);
    const getItem = (i) => {

            return new Promise((resolve, reject) => {
                return resolve(ItemListProduct[i]);
            })
    }

    useEffect(() => {
        setTimeout(() => {
            return getItem(item).then((value) => {
                setItemElegido(value);
                
                
            })
        }, 2000)
    }, [])

    return (
        <Container>
        <div>
            {console.log(itemElegido)}
            <ItemDetail 
            image= {itemElegido.img}
            name ={itemElegido.title}
            price={itemElegido.price}
            color={itemElegido.color}
            />
        
        </div>
        </Container>
    )

}
export default ItemDetailContainer