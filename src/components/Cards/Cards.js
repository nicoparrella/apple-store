import './Cards.css'

export default function Cards({tittle, price, model}) {
    console.log('precio: ', tittle)
    console.log('precio: ', price)
    console.log('precio: ', model)
    return(
        <div className="card">
            <h1>{tittle}</h1>
            <h2>${price}</h2>
            <h3>Model: {model}</h3>
            <button>Comprar</button>
        </div>
        )
}