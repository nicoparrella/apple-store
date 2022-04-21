import {useState, useContext} from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import CartContext from '../components/Context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalCustom from '../Modal/ModalCustom';
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const CartPage = () => {
    const { CartsProducts, deleteProduct, calculeTotalPrice, emptyCart } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: CartsProducts,
            total: calculeTotalPrice
        }
    )
        const [successOrder, setsuccessOrder] = useState()
        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name] : e.target.value
            })
            console.log(e.target.value, e.target.name)
        }

        const handleSubmit = (e) => {
            let prevOrder = {...order,buyer: formData}
            e.preventDefault()
            setOrder({...order,buyer: formData})
            pushOrder(prevOrder)
        }

        const pushOrder = async (prevOrder) => {
            const orderFirebase = collection(db, 'ordenes')
            const orderDoc = await addDoc(orderFirebase, prevOrder)
            console.log('orderDoc: ', orderDoc.id )
            setsuccessOrder(orderDoc.id)
        }

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
                                <h1>{title}</h1>
                                <h2>${price}</h2>
                                <h3>Color: {color}</h3>
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
                        <Button onClick={() => setOpenModal(true)}>Completar Compra</Button>
                        <Button onClick={emptyCart}>Vaciar carrito</Button>
                </div>
            </div>
            {console.log('Order:', order)}
            <ModalCustom handleClose={() => setOpenModal(false)} open={openModal} >
                {successOrder ?(
                    <div>
                        <h3>Su compra se ha realizado.</h3>
                        <p>Su numero de orden es: {successOrder}</p>
                    </div>
                ) : (
                <>
                    <h2>FORM USUARIO</h2>
                        <form onSubmit={handleSubmit}>
                        <input type='text' name='name' placeholder='Nombre' onChange={handleChange} value={formData.name}/>
                        <input type='number' name='phone' placeholder='Telefono' onChange={handleChange} value={formData.phone}/>
                        <input type='mail' name='email' placeholder='Email' onChange={handleChange} value={formData.email}/>
                        <Button type='submit'>Enviar</Button>
                    </form>
                </>
                )}
                
            </ModalCustom>
        </Container>
    )
}

export default CartPage