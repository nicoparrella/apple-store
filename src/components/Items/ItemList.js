import ItemListProduct from "./ItemListProduct"
import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import CartContext from "../Context/CartContext"
import ItemDetail from "./ItemDetail"
import { Button, Container, Grid } from "@mui/material"
import ItemCount from "../Cards/ItemCount"

const ItemList = () => {
    const { CartsProducts, addProductCart } = useContext(CartContext)
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const filterProduct = () => {

        ItemListProduct.map((product) => {
            if (id == product.id) {
                return setProduct(product)
            }

        })
    }
    const addtoCart = (qty) => {


        addProductCart(product, qty);


    }
    const verProducto = () => {
        console.log(CartsProducts)
    }

    useEffect(() => {
        filterProduct()

    }, [id])

    return (
        <div className="boxItem">
            <Container>
                    <ItemDetail
                        img={product.img}
                        title={product.title}
                        price={product.price}
                        color={product.color}
                    />


                    <ItemCount addProduct={addtoCart} />
            </Container>

        </div>
    )

}
export default ItemList