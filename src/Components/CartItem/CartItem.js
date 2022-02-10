import './CartItem.css'
function CartItem({item, subtotal}){
    return (
        <div className="cart-item"> 
            <img src={require(`../../Assets/Images/${item.product.brand.toLowerCase()}-${item.product.model.toLowerCase()}.jpeg`)} alt=''/>
            <div className="info-item">
                <h4>{item.product.brand} {item.product.model}</h4>
                <p>Cantidad: {item.qty}</p>
                <p>Subtotal: ${subtotal}</p>
            </div>
        </div>
    );
}

export default CartItem;