import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [CartsProducts, setCartProducts] = useState([])

    const addProductCart = (product) => {
        console.log('producto agregar:', product)
        setCartProducts(CartsProducts => [...CartsProducts, product])
    }

    const data = {
        CartsProducts,
        addProductCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext