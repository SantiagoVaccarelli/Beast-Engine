import "./Counter.css";
import {useState} from "react";
import { Link } from 'react-router-dom';


const Counter = ({onAdd}) => {
    
    let [contadorValue,contadorFuncion] = useState(1);

    return (
        <div className="contador">
            <div>
                <button className='buttonsLight' onClick = {()=>{
                    contadorValue?contadorFuncion(contadorValue-1):contadorFuncion(contadorValue);
                }}>
                -
                </button>

                <span>{contadorValue}</span>
                
                <button className='buttonsLight' onClick = {()=>{
                    contadorFuncion(contadorValue+1);
                }}>
                +
                </button>
            </div>
            <Link to={`/cart`} className='buttonsLight'  onClick={()=>onAdd(contadorValue)}><p>Agregar al carrito</p></Link>
        </div>    
    )
}

export default Counter;