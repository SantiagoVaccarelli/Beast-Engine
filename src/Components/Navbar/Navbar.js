import './Navbar.css';
import '../CartWidget/CartWidget.js'
import CartWidget from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link to='/'><h1>Beast engine</h1></Link>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/products'>Productos</Link></li>
                    <li><Link to={`/cart`}><CartWidget/></Link></li>                    
                </ul>
            </nav>
        </header>
    )
}



export default Navbar;