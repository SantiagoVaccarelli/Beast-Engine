import "./Counter.css";
import {useState} from "react";
import { Link } from 'react-router-dom';


const Counter = ({onAdd}) => {
    
    let [value, setValue] = useState(1);

    return (
        <div className="contador">
            <div>
                <button className='buttonsLight' onClick = {()=>{
                    value?setValue((value)=> value - 1):setValue((value)=> value);
                }}>
                -
                </button>

                <span>{value}</span>
                
                <button className='buttonsLight' onClick = {()=>{
                    setValue((value) => value + 1);
                }}>
                +
                </button>
            </div>
            <Link to={`/cart`} className='buttonsLight'  onClick={()=>onAdd(value)}><p>Agregar al carrito</p></Link>
        </div>    
    )
}

export default Counter;