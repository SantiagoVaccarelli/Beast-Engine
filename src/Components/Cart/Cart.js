import { useContext } from 'react';
import { context } from '../../Context/CartContext'
import './Cart.css'

const Cart = () =>{

    const  {cart} = useContext(context);
    console.log(cart);

    return (
        <div className='cart'>
            <h1>Tu carrito:</h1>

            <div className="productos">
            </div>
        </div>
    )

}

export default Cart;