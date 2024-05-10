import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../login/login.css'
import login_icon from "../../../public/images/icons/login_icon.svg"
import { handleLogin } from "../../handlers/loginHandle"


function Login_user() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(''); // Define el estado para el mensaje de error

    // const onSubmit = data => {
    //     console.log('Login data:', data);
    //     // Aquí llamarías a tu función handleLogin con los datos del formulario

    //     handleLogin(data, setErrorMessage);

    // };

    const onSubmit = data => {
        console.log('Login data:', data);
        // Aquí llamarías a tu función handleLogin con los datos del formulario
        handleLogin(data)
            .then(() => {
                // Si el login es exitoso, resetea los campos del formulario
                reset();
                // Aquí también podrías redirigir al usuario a otra página o cambiar el estado de la aplicación
            })
            .catch(error => {
                // Si hay un error en el login, establece el mensaje de error
                setErrorMessage(error.message);
            });
    };
    return (



        <form className="formulary" onSubmit={handleSubmit(onSubmit)}>

            <img src={login_icon} className="login-icon" alt="imagen login" />
            <h1 >Miembro Oviva</h1>
            <p className="text-user">Usuario</p>

            <input
                className="field-user"
                type="email"
                placeholder="Correo Electrónico"
                {...register("email", {
                    required: "Este campo es requerido",
                    pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Por favor ingresa un correo electrónico válido"
                    }
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}

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

            <button type="submit" className="login-button">Ingresar</button>
            {errorMessage && <p>{errorMessage}</p>} {/* Muestra el mensaje de error si existe */}
            <button className="goregister-button">¿No eres miembro?, regístrate</button>

        </form>

    );

};

export default Login_user;