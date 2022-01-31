import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ItemDetail = ({item})=>{
    console.log(item);
    return(
        <div className='product'>
        <Link to={`/${item.id}`}>
            <img src={require(`../../Assets/Images/${item.brand.toLowerCase()}-${item.model.toLowerCase()}.jpeg`)} alt=''/>
        </Link>

        <ul>
            <li><h1>{item.brand} {item.model}</h1></li>
            <li><FontAwesomeIcon icon={faAngleRight}/>${item.price}</li>
            <li><FontAwesomeIcon icon={faAngleRight}/> {item.distance} km</li>
        </ul>
    </div>
    )
}

export default ItemDetail;