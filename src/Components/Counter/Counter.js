import "./Counter.css";
import {useState} from "react";


const Counter = () => {
    let [contadorValue,contadorFuncion] = useState(0);
    return (
        <div className="contador">
            <div>
                <button className='buttonsLight' onClick = {()=>{
                contadorFuncion(contadorValue-1);
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
        </div>    
    )
}

export default Counter;