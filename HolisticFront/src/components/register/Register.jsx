import React from "react";
import '../register/register.css'


function Login_user() {


    return (



        <form className="register">

            <img src={login_icon} className="login-icon" alt="imagen login" />
            <h1> Registro Miembro Oviva</h1>
            <p>Usuario</p>
            <input className="field-user"
                type="text"
                placeholder="Nombre de Usuario o Correo Electrónico"
                required
            />

            <p>Contraseña</p>
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