import './footer.css';

function Footer() {



    return (
        <footer>
            <section className="footer_left">
                <section>¿Quién soy?</section>
                <section>Política de privacidad</section>
            </section>
            <section className="footer_center">
                <img src="/images/logo_no_words.png" alt="Oviva Logo" className='footer_logo'/>
                <section>Oviva © 2024</section>
            </section>
            <section className="footer_right">
                <img src="/images/icon_facebook.svg" alt="Facebook logo" />
                <img src="images/icon_instagram.svg" alt="Instagram logo" />
            </section>
        </footer>
    );
}

export default Footer;