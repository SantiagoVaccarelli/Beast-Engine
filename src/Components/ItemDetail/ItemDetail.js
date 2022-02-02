import { useNavigate } from 'react-router-dom';
import './ItemDetail.css'
import Counter from '../Counter/Counter'

const ItemDetail = ({item}) =>{

    const navigate = useNavigate();

    const onAdd = (contador) => {
        item.qty = contador;
        console.log(`El producto fue añadido al carrito correctamente (cantidad ${contador})`)
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
                    <Counter onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;