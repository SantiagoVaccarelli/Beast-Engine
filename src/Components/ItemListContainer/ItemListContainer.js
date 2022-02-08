import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useEffect, useState} from 'react'
import { getFirestore } from '../../Firebase';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect( ()=>{ 
        const db = getFirestore();
        const productsCollection = db.collection('products');
        const getDataFromFirestore =  async ()=>{
            try {
                const response = await productsCollection.get();
                setItems(response.docs.map((doc)=>({...doc.data(), id:doc.id})));
                console.log(items);
            }

            finally { setLoading(false); };
        }
        getDataFromFirestore();
    }, 
    [items]);
       

    if (loading) return <div className='cargando'> <p>Cargando...</p></div>;
    
    return (
        <div>
            <ItemList products={items}/>
        </div>
    )
}

export default ItemListContainer;