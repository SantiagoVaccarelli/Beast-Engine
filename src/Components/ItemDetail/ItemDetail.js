import { Link } from 'react-router-dom';
import './ItemDetail.css'

const ItemDetail = ({item})=>{
    console.log(item);
    return(
        <div className='itemDetail'>
            <div className='itemContainer'>
                <div className='item'>
                    <img src={require(`../../Assets/Images/${item.brand.toLowerCase()}-${item.model.toLowerCase()}.jpeg`)} alt=''/>

                    <ul>
                        <li><h1>{item.brand} {item.model}</h1></li>
                        <li>${item.price}</li>
                        <li>{item.distance} km</li>
                    </ul>
                </div>
                <div className='itemButtons'>
                    <Link to={`/products`}><p>Volver</p></Link>
                    <Link to={`/`}><p>Agregar al carrito</p></Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;