import "./error404.css";
import { Link } from "react-router-dom";
import React from "react";

function Error404() {
    return (
        <section className="error404">
            <img src="/images/error404.png" className="error404--img" alt="Error 404" />
            <p>¡Vaya! La página solicitada no existe o necesitas iniciar sesión para acceder.

            Si ya tienes una cuenta, accede <Link to="/login">aqui</Link>
            Si deseas registrarte, accede <Link to="/register">aqui</Link>

            </p>
        </section>
    );
}

export default Error404;