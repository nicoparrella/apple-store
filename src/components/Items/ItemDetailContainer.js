import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import ItemListProduct from './ItemListProduct'

const ItemDetailContainer = () => {
    const [dataProduct, setDataProduct] = useState({})

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            return resolve(ItemListProduct)
        })
    }

    useEffect( () => {
        getProduct().then( (producto) => {
            setDataProduct(producto)
            console.log("Llamada al mock:", producto)
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])

    return (
        <>
            <ItemDetail data={dataProduct}/>
        </>
    )
}

export default ItemDetailContainer