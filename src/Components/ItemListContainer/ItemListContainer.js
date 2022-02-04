import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import products from '../../Assets/products';
import {useEffect, useState} from 'react'


const ItemListContainer = () => {

    const [productsS, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {resolve(products)}, 2000);  
        });
    };

    useEffect(()=>{
        getProducts().then((r)=>setProducts(r));
    }, []);


    const filtrar = () => {
        setProducts(products.filter((i)=> i.model==="Fiesta"))
    } 

    
    return (
        <div>
            <ItemList products={productsS}/>
            <button onClick={()=>filtrar()}>FILTRO</button>
        </div>
    )
}

export default ItemListContainer;