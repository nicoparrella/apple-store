import React,{useState, useEffect} from 'react'
import Item from '../Items/Item'
import ItemListProduct from './ItemListProduct'
import "../Cards/CardsProducts.css"

const ItemList = () => {
    const [products, setProducts] = useState([]);
    
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(ItemListProduct);
        }, 2000);
    });
    
    const getProductsFromDB = async () => {
        try {
        const result = await getProducts;
        setProducts(result);
        } catch (error) {
        console.log(error);
        alert('No podemos mostrar los productos en este momento');
        }
    };
    useEffect(() => {
        getProductsFromDB();
    }, []); 
    return (
        <div>
        {
            
            products.length ? ( 
            <>
                {
                
                products.map((product) => {
                    
                    return (
                    <div key={product.id} className='card'>
                        <Item 
                        img={product.img}
                        title={product.title}
                        price={product.price}
                        color={product.color}
                        id={product.id}
                        />
                    </div>
                    );
                })
                }
            </>
            ) : (
            <p>Cargando productos...</p>
            ) 
        }
        </div>
    );
};


export default ItemList;