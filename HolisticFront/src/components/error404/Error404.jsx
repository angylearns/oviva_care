import "./error404.css";
import { Link } from "react-router-dom";
import React from "react";

function Error404() {
    return (
        <section className="error404">
            <img src="./image/error_404.png" className="error404--img" alt="Error 404" />
            <p>¡Vaya! La página solicitada no existe o necesitas iniciar sesión para acceder.</p>

            <p>Si ya tienes una cuenta, accede <Link to="/login">aqui</Link></p>
            <p>Si deseas registrarte, accede <Link to="/register">aqui</Link></p>
        </section>
    );
}

export default Error404;