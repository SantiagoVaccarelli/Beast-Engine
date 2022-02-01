import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="footerContainer">
                <div class="copyright">
                    <FontAwesomeIcon icon={faCopyright}/>
                    <p class="copyrightItem">2021 Beast Engine</p>
                </div>
                
                <p class="textoFooter"> The Best Car Shop</p>
                
                <ul className='redes'> 
                    <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}/></a></li>
                    <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/></a></li>
                    <li><a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter}/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;