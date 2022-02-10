import { useContext } from 'react';
import { context } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = () =>{

    const  {cart, addToCart, removeFromCart, clearCart, productsQty, subTotal, total} = useContext(context);
    console.log(cart);

    return (
        <div className="cart-overlay">
            <div className="cart">
                <h2>Tu carrito:</h2>

                <div>
                    {cart.map((item) => {
                    return (
                        <div key={item.product.id}>
                            <CartItem item={item}/>
                            
                            <div onClick={()=>removeFromCart(item)}>
                                <button>remove</button>
                            </div>
                        </div>
                    )
                    })}
                </div>

                <div className="cart-footer">
                    <h3>your total : $<span className="cart-total">{total()}</span></h3>
                    <button onClick={() => clearCart()}>clear cart</button>
                </div>

            </div>
        </div>)

}

export default Cart;