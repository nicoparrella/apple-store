import Cards from "../Cards/Cards";

const ListProducts = ({children}) => {
    return(
        <div>
                <h2>{children}</h2>
            <Cards tittle='Iphone 13' price='600' model='Mini'/>
            <Cards tittle='Iphone 13' price='800' model='Original'/>
            <Cards tittle='Iphone 13' price='1000' model='Pro'/>
            <Cards tittle='Iphone 13' price='1200' model='Pro Max'/>
        </div>
    )
}

export default ListProducts;