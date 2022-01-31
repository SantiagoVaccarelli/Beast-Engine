import "./Counter.css";
import {useState} from "react";


const Counter = () => {
    let [contadorValue,contadorFuncion] = useState(0);
    return (
        <div className="contador">
            <div>
                <button onClick = {()=>{
                contadorFuncion(contadorValue-1);
                }}>
                Decrementar
                </button>

                <span>{contadorValue}</span>
                
                <button onClick = {()=>{
                    contadorFuncion(contadorValue+1);
                }}>
                Incrementar
                </button>
            </div>
            <button onClick = {()=>{
                contadorFuncion(0);
            }}>
            Reiniciar
            </button>

        </div>    
    )
}



export default Counter;