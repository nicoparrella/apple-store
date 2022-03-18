import Cards from "../Cards/Cards";

const ListProducts = ({children}) => {
    return(
        <div>
                <h2>{children}</h2>
            <Cards tittle='Iphone 13 Mini' price='600' color='Black'/>
            <Cards tittle='Iphone 13 Original' price='800' color='White'/>
            <Cards tittle='Iphone 13 Pro' price='1000' color='Blue'/>
            <Cards tittle='Iphone 13 Pro Max' price='1200' color='Red'/>
        </div>
    )
}

export default ListProducts;