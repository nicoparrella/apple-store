import ItemListProduct from "../Items/ItemListProduct";
import { useEffect, useState } from "react";
import Item from "../Items/Item";
import { Link, useParams } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "../Cards/CardsProducts.css"

const ItemListContainer = ({children}) => {
    const { category } = useParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return setTimeout( () => {
                resolve(ItemListProduct)
            }, 2000 )
        })
        }

    useEffect(() => {
        setLoading(true)
        setProducts([])
        
        return getProducts().then((productos) => {
            setLoading(false);
            category ? filterProductByCategory(productos, category) : setProducts(productos)
            
            
            
        })

    }, [category])
    const filterProductByCategory = (array, category) => {
        array.map((producto)=> {
            if (category == producto.categoria){
                return setProducts( products => [...products, producto])
            }
        })


    }


    return (
        
        <div className="boxItem">
            
            
            { 
                !loading ? (
                    products.map((producto) => {
                        const { title, price, color, img, id, categoria } = producto;
                        if (category) {
                            return (
                                
                                <Link to={`./${id}`}>
                                <div key={id} className="item" >
                                    <Item
                                        title={title}
                                        price={price}
                                        color={color}
                                        img={img}
                                    />
                            
                                </div>
                                </Link>
                            )} 
                            else {
                                return (
                                
                                    <Link to={`./${categoria}/${id}`}>
                                    <div key={id} className="card" >
                                        <Item
                                            title={title}
                                            price={price}
                                            color={color}
                                            img={img}
                                        />
                                
                                    </div>
                                    </Link>
                                )}
    
                        }
    
    
    
                        )
    
                    ) : (
                        
                        
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    )
                }
    
            </div>
    
    
        )
    
    }
    export default ItemListContainer;