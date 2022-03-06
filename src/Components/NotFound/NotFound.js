import { useNavigate } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="notFoundContainer">
            <h1>404 Error: Page not found</h1>
            
            <button className='buttonsLight' onClick={() => navigate(-1)?navigate(-1):navigate(`/`)}>Volver</button>
        </div>
    )
}

export default NotFound;