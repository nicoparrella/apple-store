import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import mockProduct from './MockProduct'

const ItemDetailContainer = () => {
    const [dataProduct, setDataProduct] = useState({})

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProduct)
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