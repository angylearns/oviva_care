import { Link, BrowserRouter as Router } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
        <footer>
            <Router>
                <section className="footer_left">
                    <img src="/images/logo_no_words.png" alt="Oviva Logo" className='footer_logo'/>
                    <section>Oviva © 2024</section>
                </section>
                <section className="footer_center">
                    <Link to="/"><section>¿Quién soy?</section></Link>
                    <Link to="/"><section>Política de privacidad</section></Link>
                </section>
                <section className="footer_right">
                    <Link to="/" className='link_facebook'><img src="/images/icons/icon_facebook.svg" alt="Facebook logo"/></Link>
                    <Link to="/" className='link_instagram'><img src="/images/icons/icon_instagram.svg" alt="Instagram logo" /></Link>
                </section>
            </Router>
        </footer>
    );
}

export default Footer;
