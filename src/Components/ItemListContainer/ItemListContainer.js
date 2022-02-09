import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useEffect, useState} from 'react'
import { getFirestore } from '../../Firebase';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState();
    const { categoryId } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        let productsCollection;
        if (categoryId) {
          productsCollection = db
            .collection("productos")
            .where("categoryId", "==", Number(categoryId));
        } else {
          productsCollection = db.collection("products");
        }
    
        const getDataFromFirestore = async () => {
          setLoading(true);
          try {
            const response = await productsCollection.get();
            if (response.empty) console.log("No hay productos");
            setItems(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          }  finally {
            setLoading(false);
          }
        };
        getDataFromFirestore();
      }, [categoryId]);

    if (loading) return <div className='cargando'> <p>Cargando...</p></div>;
    
    return (
        <div>
            <ItemList products={items}/>
        </div>
    )
}

export default ItemListContainer;