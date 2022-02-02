import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFoundContainer">
            <h1>404 Error: Page not found</h1>
            
            <Link className='buttonsLight' to={`/`}><p>Volver al inicio</p></Link>
        </div>
    )
}

export default NotFound;