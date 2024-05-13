import React, { useState, } from "react";
import { useForm } from 'react-hook-form';
import '../register/register.css';
import login_icon from "../../../public/images/icons/login_icon.svg";
import { handleRegister } from "../../handlers/registerHandle";


function Register() {
    // maneja el estado del formulario, la validación y el envío del formulario.
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(""); // Estado para almacenar el mensaje de error


    //Verifica que se está conectando con loginhandle (una vez que rellene los datos de loginhandle, verifica que los datos se conectan )
    // const onSubmit = data => {
    //     console.log('jsx ' + JSON.stringify(data));
    //     handleRegister(data, setErrorMessage);
    // }

     //Verifica que se está conectando con loginhandle (una vez que rellene los datos de loginhandle, verifica que los datos se conectan )
    const onSubmit = data => {
        console.log('jsx ' + JSON.stringify(data));
        handleRegister(data, setErrorMessage)
            .then(() => {
                reset(); // Esto limpiará todos los campos después del registro exitoso
            })
            .catch(error => {
                // Manejar el error aquí si es necesario
            });
    };


    return (

        //  handleSubmit se pasa como manejador del evento onSubmit del formulario. Esto asegura que la validación se ejecute antes de que se envíe el formulario. 
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <img src={login_icon} className="login-icon" alt="imagen login" />
                <h1 className="main-text-register">Registro Miembro Oviva</h1>
            </div>
            <div className="fieldsblock">
                <div className="groupfields1">

                    <p className="text-regname">Nombre</p>

                    <input
                        className="field-regname"
                        {...register("name", {
                            required: "Este campo es requerido",
                            pattern: {
                                value: /^[A-Za-z\u00C0-\u00FF\s]+$/i,
                                message: "Solo se permiten letras"
                            }
                        })}
                        placeholder="Nombre completo"
                    />
                    {errors.name && <p>{errors.name.message}</p>}


                    <p className="text-regemail">Correo Electrónico</p>
                    <input
                        className="field-regemail"
                        {...register("email", {
                            required: "Este campo es requerido",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Correo electrónico no válido"
                            }
                        })}
                        placeholder="Correo Electrónico"
                    />
                    {errors.email && <p>{errors.email.message}</p>}


                    <p className="text-regdiagnose">¿Estás diagnosticada?</p>
                    <select
                        className="field-regdiagnose"
                        {...register("diagnosed", { required: "Este campo es requerido" })}
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </select>
                    {errors.diagnosed && <p>{errors.diagnosed.message}</p>}

                </div>


                <div className="groupfields2">

                    <p className="text-regcountry">País</p>
                    <input
                        className="field-regcountry"
                        {...register("country", {
                            required: "Este campo es requerido",
                            pattern: {
                                value: /^[A-Za-z\u00C0-\u00FF\s]+$/i,
                                message: "Solo se permiten letras"
                            }
                        })}
                        placeholder="País"
                    />
                    {errors.country && <p>{errors.country.message}</p>}


                    <p className="text-regpassword">Contraseña</p>
                    <input
                        className="field-regpassword"
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
                        placeholder="Contraseña"
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

            </div>

            <div className="buttons">
                <button type="submit" className="register-regbutton">Registrar</button>
                {/* <Link to="/Login_user"> */}
                <button className="gologin-button">¿Ya eres miembro?, inicia sesión</button>
                {/* </Link> */}
            </div>
            {/* Mostrar mensaje de error si está presente */}
            {errorMessage && <p>{errorMessage}</p>}

        </form>


    );

};

export default Register;