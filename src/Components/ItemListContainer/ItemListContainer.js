import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useEffect, useState} from 'react'
import { getFirestore } from '../../Firebase';
import { useParams } from 'react-router-dom';

// Desafio Firebase 2 
//import { Products } from '../../Assets/products';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState();
    const { categoryId } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        let productsCollection;
        if (categoryId) {
          productsCollection = db
            .collection("products")
            .where("category", "==", categoryId);
        } else {
          productsCollection = db.collection("products");
        }


      // Desafio Firebase 2 
      // const addProductToFirebase = ()=>{
      //   productsCollection = db.collection("productos");
      //   Products.forEach((prod)=>productsCollection.add(prod));
      // }
        
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

        //Desafio Firebase 2 (descomentar para probarlo)
        //addProductToFirebase();

      }, [categoryId]);

    if (loading) return <div className='cargando'> <p>Cargando...</p></div>;
    
    return (
        <div>
            <ItemList products={items}/>
        </div>
    )
}

export default ItemListContainer;