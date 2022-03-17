import imgCart from './carrito.jpg'
import './imgCart.css'

const Cartwidget = () => {
    return(
        <div>
            <img src={imgCart} alt='imagen de carrito' className='img'/>
        </div>
    )
}

export default Cartwidget