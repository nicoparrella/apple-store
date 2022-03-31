import React,{useState, useEffect} from 'react'
import Item from '../Items/Item'
import { ItemListProduct } from '../Items/ItemListProduct'
import "../Cards/CardsProducts.css"
import { useParams } from 'react-router-dom'

// const DetailPage = () => {
//     const { id, category } = useParams()
//     const [product, setProduct] = useState({})

//     useEffect( () => {
//         FilterProductsById(ItemListProduct, id)
//     }, [id])

//     const FilterProductsById = () => {
//         return ItemListProduct.filter( (product) =>{
//             if(product.id === id)
//                 return console.log('id:', id , 'producto:' , product)
//         })
//     }
// }

// const FilterProductsById = (array, id) => {
//     return array.map( (product) => {
//         if(product.id == id){
//             return console.log('producto filtrado:', product, 'id:', id)
//         }
//     })
// }


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