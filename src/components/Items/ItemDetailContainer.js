import React from "react"
import { useState, useEffect } from "react";
import ItemListProduct from "./ItemListProduct";
import ItemDetail from "./ItemDetail";
import Container from "@mui/material/Container"
import db from "../../firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { Link, useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const getProduct = async() => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDocs(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
            } else {
            console.log("No such document!");
            }
    }

    useEffect( () => {
        getProduct()
    }, [id])

    return (
        <Container>
        <div>
            <ItemDetail 
            image= {product.img}
            name ={product.title}
            price={product.price}
            color={product.color}
            />
        </div>
        </Container>
    )

}
export default ItemDetailContainer