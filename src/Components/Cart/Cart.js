import { useContext, useState } from 'react';
import { context } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css'
import { getFirestore } from '../../Firebase';

const Cart = () =>{

    const  {cart, removeFromCart, clearCart, subTotal, total} = useContext(context);
    
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        if (!name || !phone ) alert('Complete sus datos para finalizar la compra');
        else {
            const newOrder = {
                buyer: {name, phone},
                items: cart,
                total: total()
            }
            const db = getFirestore();
            let ordersCollection = db.collection("orders");
            ordersCollection.add(newOrder).then((resolve)=>alert(`Su compra fue exitosa! ID de la compra: ${resolve.id}`));
            clearCart();
        }
    }

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
                        </div>
                        
                        <div className='cart-form'>
                            <h2>Introduzca sus datos:</h2>

                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Nombre: </label>
                                <input type="text" name="name" id="name" value={name} placeholder="Ingrese su nombre" onChange={(e)=>setName(e.target.value)}/>
                                <label htmlFor="phone">Telefono: </label>
                                <input type="text" name="phone" id="phone" value={phone} placeholder="Ingrese su nombre" onChange={(e)=>setPhone(e.target.value)}/>
                                <input type="submit" className='buttonsLight' value="Finalizar compra"/>
                            </form>
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