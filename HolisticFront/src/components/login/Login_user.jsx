import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../login/login.css';
import login_icon from "../../../public/images/icons/login_icon.svg";
import { handleLogin } from "../../handlers/loginHandle";
import { saveTokenToCookies, TOKEN_COOKIE_NAME } from "../../utils/authUtils"; // Importar TOKEN_COOKIE_NAME
import { useCookies } from "react-cookie";

function Login_user() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(''); // Define el estado para el mensaje de error
    const [cookies, setCookie] = useCookies([TOKEN_COOKIE_NAME]); // Uso de useCookies

    const [showAlert, setShowAlert] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const handleError = (message) => {
        setErrorMessage(message);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };


    const onSubmit = data => {
        handleLogin(data, handleError, setShowAlert, setSuccessMessage)
            .then((token) => {
                saveTokenToCookies(token, setCookie); // Pasar setCookie como argumento
                // Si el login es exitoso, puedes redirigir al usuario a otra página o cambiar el estado de la aplicación
                reset();
                setShowAlert(true);
            })
            .catch(error => {
                setErrorMessage('Ocurrió un error al registrar la persona'); // Actualiza el mensaje de error
                setShowAlert(true); // Muestra la ventana emergente de alerta
            });
    };


    return (



        <form className="formulary" onSubmit={handleSubmit(onSubmit)}>

            {/* Ventana emergente de alerta */}
            {showAlert && (
                <div className="register-alert">
                    <div className="register-alert-content">
                        <span>{successMessage || errorMessage}</span> {/* Muestra el mensaje de éxito o de error */}
                        <button onClick={handleCloseAlert}>Cerrar</button>
                    </div>
                </div>
            )}

            <div className='loginlogo-and-text'>
                <img src={login_icon} className="login-icon" alt="imagen login" />
                <h1 className="main-text-login">Miembro Oviva</h1>
            </div>

            <div>
                <p className="text-user">Usuario</p>

                <input
                    className="field-user"
                    type="email"
                    placeholder="Correo Electrónico"
                    {...register("email", {
                        required: "Este campo es requerido",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@.]{2,}$$/,
                            message: "Por favor ingresa un correo electrónico válido"
                        }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <p className="text-password">Contraseña</p>

                <input
                    className="field-password"
                    type="password"
                    placeholder="Contraseña"
                    {...register("password", {
                        required: "Este campo es requerido",
                        minLength: {
                            value: 8,
                            message: "La contraseña debe tener al menos 8 caracteres"
                        },
                        maxLength: {
                            value: 8,
                            message: "La contraseña no debe tener más de 8 caracteres"
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                            message: "La contraseña debe incluir números, letras minúsculas y mayúsculas y símbolos"
                        }
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            
            <button type="submit" className="login-button">Ingresar</button>
            {/* {errorMessage && <p>{errorMessage}</p>}  */}
            {/* Muestra el mensaje de error si existe */}
            <button className="goregister-button">¿No eres miembro?, regístrate</button>

        </form>

    );

};

export default Login_user;