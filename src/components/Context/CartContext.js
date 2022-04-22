import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [CartsProducts, setCartProducts] = useState([])

    console.log({CartsProducts})

    const addProductCart = (product) => {
        if (inCart(product.id)) {
            const prod = CartsProducts.find((p) => p.id === product.id)
            const {cantidad} = prod;
            prod.cantidad = product.cantidad + cantidad;
            const newCart = [...CartsProducts]
            setCartProducts(newCart)
        } else {
            setCartProducts([...CartsProducts, product])
        }
    }

    const inCart = (id) => {
        return CartsProducts.some( prod => prod.id === id )
    }

    const deleteProduct = (product) => {
        setCartProducts(CartsProducts.filter( (CartsProduct) => {
            return CartsProduct.id !== product.id
        }))
    }
    
    const calculeTotalPrice = () => {
        let total = 0
        CartsProducts.map( (CartsProduct) => {
            total = CartsProduct.price + total
        })
        return total
    }

    function emptyCart(){
        setCartProducts([])
    }

    const cantidad = () => {
        return CartsProducts.reduce((acum, item) => acum += item.cantidad, 0)
    }

    const data = {
        CartsProducts,
        addProductCart,
        deleteProduct,
        inCart,
        emptyCart,
        calculeTotalPrice,
        cantidad
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext