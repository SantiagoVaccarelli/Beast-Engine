import { useContext } from 'react';
import { context } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = () =>{

    const  {cart, removeFromCart, clearCart, subTotal, total} = useContext(context);
    console.log(cart);

    return (
        <div className="cart-overlay">
            <div className="cart">
                {Object.keys(cart).length?
                <div>
                    <div>
                        <h2>Tu carrito:</h2>
                        {cart.map((item) => {
                        return (
                            <div key={item.product.id}>
                                <CartItem item={item} subtotal={subTotal(item)}/>
                                
                                <div onClick={()=>removeFromCart(item)}>
                                    <button className='buttonsLight'>remove</button>
                                </div>
                            </div>
                        )
                        })}
                    </div>

                    <div className="cart-footer">
                        <h3>Total: $<span className="cart-total">{total()}</span></h3>

                        <Link to={`../products`}>
                            <button className='buttonsLight'>Seguir comprando</button>
                        </Link>

                        <button onClick={() => clearCart()} className='buttonsLight'>Vaciar carrito</button>
                        <button className='buttonsLight'>Finalizar compra</button>
                    </div>
                </div>
                :
                <div>
                    <h2>Tu carrito esta vacio</h2>

                    <Link to={`../products`}>
                        <button className='buttonsLight'><p>Ir al catalogo</p></button>
                    </Link>

                    
                </div>
                }
            </div>
        </div>
    )
}

export default Cart;