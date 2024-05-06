import React from "react";
import '../login/login.css'
import login_icon from "../../../public/images/icons/login_icon.svg"


function Login_user() {


    return (



        <form className="formulary">

            <img src={login_icon} className="login-icon" alt="imagen login" />
            <h1 >Miembro Oviva</h1>
            <p className="text-user">Usuario</p>
            <input className="field-user"
                type="text"
                placeholder="Nombre de Usuario o Correo Electrónico"
                required
            />

            <p className="text-password">Contraseña</p>
            <input className="field-password"
                type="password"
                placeholder="Contraseña"
                required
            />
            <button type="submit" className="login-button">Ingresar</button>

            <p>¿No eres miembro?, regístrate</p>
        </form>

    );

};

export default Login_user;