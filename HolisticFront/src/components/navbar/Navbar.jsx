import './navbar.css';

function Navbar() {


    return (
        <nav className="navbar_main navbar_user">
            <section className="navbar_main_left">
                <img src="/images/logo_words.png" alt="Oviva Logo" className='navbar_main_logo' />
            </section>
            <section className="navbar_main_center">
                <section>Preguntas</section>
                <section>Expertos</section>
                <section>Blog</section>
                <section>Recetas</section>
                <section>Videos</section>
            </section>
            <section className="navbar_main_right">
                <img src="/images/icon_profile_female.svg" alt="User icon" />
            </section>
        </nav>
    )
}

export default Navbar;