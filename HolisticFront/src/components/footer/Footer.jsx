// TODO: Link everything, try with grid in order to make it responsive the way we planned it on Figma

import './footer.css';

function Footer() {



    return (
        <footer>
            <section className="footer_left">
                <img src="/images/logo_no_words.png" alt="Oviva Logo" className='footer_logo'/>
                <section>Oviva © 2024</section>
            </section>
            <section className="footer_center">
                <section>¿Quién soy?</section>
                <section>Política de privacidad</section>
            </section>
            <section className="footer_right">
                <img src="/images/icons/icon_facebook.svg" alt="Facebook logo" />
                <img src="images/icons/icon_instagram.svg" alt="Instagram logo" />
            </section>
        </footer>
    );
}

export default Footer;