import "./CartWidget.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"


const CartWidget = () => {
    return (
            <FontAwesomeIcon icon={faCartPlus}/>
    )
}

export default CartWidget;