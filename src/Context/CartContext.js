import { createContext, useState } from "react";
export const CartContext = createContext();
export const { Provider } = CartContext;


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product, qty) =>
        cart.some(item => item.id === product.id)? setCart((prevCart)=> prevCart.map((item)=> item.id===product.id? item.qty+=qty:item)) : setCart((prevCart)=> [...prevCart, { product: product, qty: qty }]);

    const removeFromCart = (prod) => setCart(cart.filter(item => item.id !== prod.id));
    
    const clearCart = () => setCart([]);

    const subTotal = (product) =>  product.price * product.quantity;

    const productsQty = () => {
        let qty = 0;
        cart.forEach(item => qty += item.qty)
        return qty
    }

    const total = () => {
        let total = 0;
        cart.forEach(item => total+=item.qty*item.price);
        return total;
    }

    const cartValues = {
        addToCart: addToCart,
        removeFromCart:removeFromCart,
        clearCart:clearCart,
        productsQty:productsQty,
        subTotal:subTotal,
        total:total
    }

    return (
        <CartContext.Provider value={{ cart, cartValues }}> {children} </CartContext.Provider>
    )
}

export default CartProvider;