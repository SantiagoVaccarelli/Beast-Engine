import { useNavigate } from "react-router-dom";
import "./Home.css";


const Home = () => {

    let navigate = useNavigate();

    const goToProducts = () => {
        navigate('products');
    }

    return (
        <section className="home" id="home">
            <div className="banner">
                <h1 className="banner-title">Beast engine</h1>
                <button className="banner-btn" onClick={goToProducts}>shop now</button>
            </div>
        </section>
    )
}



export default Home;