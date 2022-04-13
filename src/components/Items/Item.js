import ItemCount from '../Cards/ItemCount';
import { Link } from "react-router-dom";
import CartContext, { useCartContext } from '../Context/CartContext';

const Item = ({title, price, color, img, id}) => {
    const addProduct = (cant) => {
        console.log(`Agregaste ${cant}`)
    }

    const { addProductCart } = useCartContext()

    return (
        <article>
            <img src={`./${img}`} alt={{img}}/>
            <h1>{title}</h1>
            <h2>${price}</h2>
            <h3>Color: {color}</h3>
            <Link to={`/productos/${id}`}><button className="verProducto">Ver</button></Link>
            <ItemCount addProduct={addProductCart}/>
        </article>
    )
}

export default Item;