import React from "react"
import ItemDetail from "./ItemDetail";
import Container from "@mui/material/Container"
import db from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom"
import ItemCount from '../Cards/ItemCount'
import { useEffect, useState, useContext } from "react"
import CartContext from "../Context/CartContext";

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const getProduct = async() => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
            } else {
            console.log("No such document!");
            }
    }

    const { addProductCart } = useContext(CartContext)

    const addtoCart = (qty) => {
        addProductCart(product, qty);
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
            <ItemCount addProduct={addtoCart} />
        </div>
        </Container>
    )

}
export default ItemDetailContainer