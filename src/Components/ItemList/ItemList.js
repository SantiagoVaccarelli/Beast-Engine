import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
    return (
        <div className='catalog' id='catalog'>
            {
            products.map((i)=>
                    <Item id={i.id} brand={i.brand} model={i.model} price={i.price} img={i.img} distance={i.distance}/>
                )
            }
        </div>
    )  
}


export default ItemList 