import { useParams } from 'react-router-dom';
import products from '../../Assets/products';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const {id} = useParams();
    const item = products.find(prod => prod.id === Number(id));

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;