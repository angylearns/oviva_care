import React from "react";
import '../register/register.css'
import login_icon from "../../../public/images/icons/login_icon.svg"


function Register() {


    return (


        <form>

            <div>
                <img src={login_icon} className="login-icon" alt="imagen login" />
                <h1>Registro Miembro Oviva</h1>
            </div>
            <div className="fieldsblock">
                <div className="groupfields1">

                    <p className="text-regname">Nombre</p>
                    <input className="field-regname"
                        type="text"
                        placeholder="Nombre completo"
                        required
                    />

                    <p className="text-regemail">Correo Electrónico</p>
                    <input className="field-regemail"
                        type="email"
                        placeholder="Correo Electrónico"
                        required
                    />

                    <p className="text-regdiagnose">¿Estás diagnosticada?</p>
                    <input className="field-regdiagnose"
                        type="text"
                        placeholder="Sí / No"
                        required
                    />

                </div>

                <div className="groupfields2">
                    <p className="text-regcountry">País</p>
                    <input className="field-regcountry"
                        type="text"
                        placeholder="País"
                        required
                    />

                    <p className="text-regpassword">Contraseña</p>
                    <input className="field-regpassword"
                        type="text"
                        placeholder="Contraseña"
                        required
                    />
                </div>
                
            </div>
                <div className="buttons">
                    <button type="submit" className="login-regbutton">Registrar</button>
                    <button  className="gologin-button">¿Ya eres miembro?, inicia sesión</button>
                </div>

                
        </form>


    );

};

export default Register;