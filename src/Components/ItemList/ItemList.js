import { Link } from 'react-router-dom'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {

    return (
        <div className='catalog'>
            <div className="catalog-filter">        
                <Link to={`/products/category/auto`}>
                    <button className='buttonsLight'>Autos</button>
                </Link>

                <Link to={`/products/category/camioneta`}>
                    <button className='buttonsLight'>Camionetas</button>
                </Link>

                <Link to={`/products`}>
                        <button className='buttonsLight'>Todo</button>
                </Link>
            </div>
            
            <div className="catalog-items">
                {
                    products.map((i)=>
                        <div key={i.id}> <Item id={i.id} brand={i.brand} model={i.model} price={i.price} img={i.img} distance={i.distance}/></div>
                    )
                }
            </div>
        </div>
    )  
}


export default ItemList 