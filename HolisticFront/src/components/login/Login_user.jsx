import React from "react";
import { useForm } from 'react-hook-form';
import '../login/login.css'
import login_icon from "../../../public/images/icons/login_icon.svg"


function Login_user() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log('Login data:', data);
        // Aquí llamarías a tu función handleLogin con los datos del formulario
        // handleLogin(data);
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
                {...register("email", { required: true })}
            />
            {errors.email && <p>Este campo es requerido</p>}

            <p className="text-password">Contraseña</p>
             <input 
                className="field-password"
                type="password"
                placeholder="Contraseña"
                {...register("password", { required: true })}
            />
            {errors.password && <p>Este campo es requerido</p>}

            <button type="submit" className="login-button">Ingresar</button>
            <button  className="goregister-button">¿No eres miembro?, regístrate</button>
          
        </form>

    );

};

export default Login_user;