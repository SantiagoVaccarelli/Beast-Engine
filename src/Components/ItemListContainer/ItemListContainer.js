import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import products from '../../Assets/products';
import {useEffect, useState} from 'react'


const ItemListContainer = () => {

    const [productsS, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {resolve(products)}, 1 /*2000*/);  
        });
    };

    useEffect(()=>{
        getProducts().then((r)=>setProducts(r))
    },[]);

    return (<ItemList products={productsS}/>)
}

export default ItemListContainer;
