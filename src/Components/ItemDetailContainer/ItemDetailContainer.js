import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore } from '../../Firebase';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const db = getFirestore();
        const productsCollection = db.collection("products");
        const selectedProduct = productsCollection.doc(id);

        selectedProduct
          .get()
          .then((response) => setItem({ ...response.data(), id: response.id }))
          .finally(() => setIsLoading(false));
      }, [id]);

    if (isLoading) return <p>Cargando...</p>;

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;