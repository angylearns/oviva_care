import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../login/login.css';
import login_icon from "../../../public/image/icons/login_icon.svg";
import { handleLogin } from "../../handlers/loginHandle";
import { saveTokenToCookies, TOKEN_COOKIE_NAME } from "../../utils/authUtils"; 
import { useCookies } from "react-cookie";
import icon_close_eye from "../../../public/image/icons/icon_close_eye.svg";
import icon_open_eye from "../../../public/image/icons/icon_open_eye.svg";
import { Link } from 'react-router-dom';



function Login_user() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(''); 
    const [cookies, setCookie] = useCookies([TOKEN_COOKIE_NAME]); 

    const [showAlert, setShowAlert] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const handleError = (message) => {
        setErrorMessage(message);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
        window.location.href = "/";
    };


    const onSubmit = data => {
        handleLogin(data, handleError, setShowAlert, setSuccessMessage)
            .then((token) => {
                saveTokenToCookies(token, setCookie); 
                reset();
                setShowAlert(true);
            })
            .catch(error => {
                setErrorMessage('Ocurrió un error al iniciar sesión.'); 
                setShowAlert(true); 
            });
    };

    const [showPassword, setShowPassword] = useState(false);

    return (



        <form className="formulary" onSubmit={handleSubmit(onSubmit)}>

            {showAlert && (
                <div className="register-alert">
                    <div className="register-alert-content">
                        <span>{successMessage || errorMessage}</span> 
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
                    type={showPassword ? "text" : "password"}
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
            <button type="button" className="icons-buttons-password-login" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <img className="icon-close-eye-login" src={icon_close_eye} /> : <img className="icon-open-eye-login" src={icon_open_eye} />}
            </button>
            <button type="submit" className="login-button">Ingresar</button>
            <button className="goregister-button">
                <Link to="/register" className="goregister-button-link">¿No eres miembro? Regístrate.</Link>
            </button>

        </form>

    );

};

export default Login_user;