import { useNavigate } from 'react-router-dom';
import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { useContext } from 'react';
import { context } from '../../Context/CartContext';

const ItemDetail = ({item}) =>{

    const navigate = useNavigate();
    const { addToCart } = useContext(context);   


    const onAdd = (contador) => {
        addToCart(item, contador);
    }
    
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
                    <button onClick={() => navigate(-1)} className='buttonsLight'><p>Volver</p></button>
                    <Counter onAdd={onAdd} item={item}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;