
function CartItem({item}){
    return (
        <div className="cart-item"> 
            <img src={require(`../../Assets/Images/${item.product.brand.toLowerCase()}-${item.product.model.toLowerCase()}.jpeg`)} alt=''/>
            <div className="info-item">
                <h4>{item.product.brand}</h4>
                <h5>{item.product.model}</h5>
                <div>{item.qty}</div>
            </div>
        </div>
    );
}

export default CartItem;