import {useState, useContext} from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import CartContext from '../components/Context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
    const { CartsProducts, deleteProduct, calculeTotalPrice, emptyCart } = useContext(CartContext)

    console.log("cartProducts:", CartsProducts)
    return(
        <Container> 
            <div>
                {CartsProducts.map( (cartProduct) => {
                    const { price, img, title, color, id } = cartProduct
                    return(
                        <div key={id}>
                            <div>
                                <p>1</p>
                            </div>
                            <Container>
                                <img src={`/${img}`} alt= {'iphone'}></img>
                                <h1>{title}Prueba</h1>
                                <h2>${price}Prueba</h2>
                                <h3>Color: {color}Prueba</h3>
                                <button onClick={() => deleteProduct(cartProduct)}><DeleteIcon/></button>
                            </Container>
                        </div>
                    )
                })}
                
                <div>
                    
                        <div>
                            <p>Total de la compra: {calculeTotalPrice()}</p>
                        </div>
                        <Button>Continuar comprando</Button>
                        <Button>Completar Compra</Button>
                        <Button onClick={emptyCart}>Vaciar carrito</Button>
                </div>
            </div>
        </Container>
    )
}

export default CartPage