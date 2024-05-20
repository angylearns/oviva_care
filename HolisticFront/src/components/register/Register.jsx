import React, { useState, } from "react";
import { useForm } from 'react-hook-form';
import '../register/register.css';
import login_icon from "../../../public/images/icons/login_icon.svg";
import { handleRegister } from "../../handlers/registerHandle";


function Register() {
    // maneja el estado del formulario, la validación y el envío del formulario.
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(""); // Estado para almacenar el mensaje de error

    const [showAlert, setShowAlert] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const handleError = (message) => {
        setErrorMessage(message);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    //Verifica que se está conectando con loginhandle (una vez que rellene los datos de loginhandle, verifica que los datos se conectan )
    // const onSubmit = data => {
    //     console.log('jsx ' + JSON.stringify(data));
    //     handleRegister(data, setErrorMessage);
    // }

    //Verifica que se está conectando con loginhandle (una vez que rellene los datos de loginhandle, verifica que los datos se conectan )
    const onSubmit = data => {
        console.log('jsx ' + JSON.stringify(data));
        // Convertir la fecha ingresada por el usuario al formato YYYY-MM-DD
        if (data.birth_date) {
            const birthDateParts = data.birth_date.split('-');
            const convertedBirthDate = `${birthDateParts[2]}-${birthDateParts[1]}-${birthDateParts[0]}`;
            data.birth_date = convertedBirthDate;
        }

        handleRegister(data, handleError, setShowAlert, setSuccessMessage)

            .then(() => {
                reset(); // Esto limpiará todos los campos después del registro exitoso
                //   alert('Enviado!');
                setShowAlert(true);
            })
            .catch(error => {
                setErrorMessage('Ocurrió un error al registrar la persona'); // Actualiza el mensaje de error
                setShowAlert(true); // Muestra la ventana emergente de alerta
            });
    };


    return (

        //  handleSubmit se pasa como manejador del evento onSubmit del formulario. Esto asegura que la validación se ejecute antes de que se envíe el formulario. 
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* Ventana emergente de alerta */}
            {showAlert && (
                <div className="register-alert">
                    <div className="register-alert-content">
                        <span>{successMessage || errorMessage}</span> {/* Muestra el mensaje de éxito o de error */}
                        <button onClick={handleCloseAlert}>Cerrar</button>
                    </div>
                </div>
            )}

            <div className="logo-and-text">
                <img src={login_icon} className="login-icon" alt="imagen login" />
                <h1 className="main-text-register">Registro Miembro Oviva</h1>
            </div>
            <div className="fieldsblock">
                <div className="groupfields1">

                    <p className="text-regname">Nombre</p>

                    <input
                        className="field-regname"
                        {...register("first_name", {
                            required: "Este campo es requerido",
                            pattern: {
                                value: /^[A-Za-z\u00C0-\u00FF\s]+$/i,
                                message: "Solo se permiten letras"
                            }
                        })}
                        placeholder="Nombre completo"
                    />
                    {errors.name && <p>{errors.name.message}</p>}



                    <p className="text-reglastname">Apellidos</p>

                    <input
                        className="field-reglastname"
                        {...register("last_name", {
                            required: "Este campo es requerido",
                            pattern: {
                                value: /^[A-Za-z\u00C0-\u00FF\s]+$/i,
                                message: "Solo se permiten letras"
                            }
                        })}
                        placeholder="Apellidos"
                    />
                    {errors.last_name && <p>{errors.last_name.message}</p>}


                    <p className="text-regemail">Correo Electrónico</p>
                    <input
                        className="field-regemail"
                        {...register("email", {
                            required: "Este campo es requerido",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@.]{2,}$$/,
                                message: "Correo electrónico no válido"
                            }
                        })}
                        placeholder="Correo Electrónico"
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <p className="text-regpassword">Contraseña</p>
                    <input
                        className="field-regpassword"
                        type="password"
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


                <div className="groupfields2">


                    <p className="text-regbirthdate">Fecha Nacimiento</p>

                    <input
                        className="field-regbirthdate"
                        {...register("birth_date", {
                            required: "Este campo es requerido",
                            pattern: {
                                value: /^\d{2}-\d{2}-\d{4}$/, // Permitir el formato DD-MM-YYYY
                                message: "Formato de fecha no válido. Utilice el formato DD-MM-YYYY."
                            }
                        })}
                        onChange={(e) => {
                            // Guardar la fecha ingresada por el usuario en el estado local
                            setValue("birth_date", e.target.value);
                        }}
                        placeholder="Fecha nacimiento"
                    />
                    {errors.birth_date && <p>{errors.birth_date.message}</p>}


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


                    <p className="text-regcountry">País</p>
                    <select
                        className="field-regcountry"
                        {...register("country", { required: "Este campo es requerido" })}
                    >
                        <option value="">Elige una opción</option>
                        <option value="al">Albania</option>
                        <option value="de">Alemania</option>
                        <option value="ad">Andorra</option>
                        <option value="am">Armenia</option>
                        <option value="at">Austria</option>
                        <option value="az">Azerbaiyán</option>
                        <option value="ar">Argentina</option>
                        <option value="be">Bélgica</option>
                        <option value="bo">Bolivia</option>
                        <option value="ba">Bosnia y Herzegovina</option>
                        <option value="br">Brasil</option>
                        <option value="bg">Bulgaria</option>
                        <option value="by">Bielorrusia</option>
                        <option value="cl">Chile</option>
                        <option value="co">Colombia</option>
                        <option value="cy">Chipre</option>
                        <option value="hr">Croacia</option>
                        <option value="dk">Dinamarca</option>
                        <option value="ec">Ecuador</option>
                        <option value="sk">Eslovaquia</option>
                        <option value="si">Eslovenia</option>
                        <option value="es">España</option>
                        <option value="ee">Estonia</option>
                        <option value="fi">Finlandia</option>
                        <option value="fr">Francia</option>
                        <option value="gy">Guyana</option>
                        <option value="gr">Grecia</option>
                        <option value="hu">Hungría</option>
                        <option value="ie">Irlanda</option>
                        <option value="is">Islandia</option>
                        <option value="it">Italia</option>
                        <option value="xk">Kosovo</option>
                        <option value="lv">Letonia</option>
                        <option value="li">Liechtenstein</option>
                        <option value="lt">Lituania</option>
                        <option value="lu">Luxemburgo</option>
                        <option value="mt">Malta</option>
                        <option value="md">Moldavia</option>
                        <option value="mc">Mónaco</option>
                        <option value="me">Montenegro</option>
                        <option value="no">Noruega</option>
                        <option value="nl">Países Bajos</option>
                        <option value="py">Paraguay</option>
                        <option value="pe">Perú</option>
                        <option value="pl">Polonia</option>
                        <option value="pt">Portugal</option>
                        <option value="cz">República Checa</option>
                        <option value="uk-eng">Inglaterra</option>
                        <option value="uk-nir">Irlanda del Norte</option>
                        <option value="uk-sct">Escocia</option>
                        <option value="uk-wls">Gales</option>
                        <option value="ro">Rumanía</option>
                        <option value="ru">Rusia</option>
                        <option value="sm">San Marino</option>
                        <option value="se">Suecia</option>
                        <option value="ch">Suiza</option>
                        <option value="sr">Surinam</option>
                        <option value="tr">Turquía</option>
                        <option value="ua">Ucrania</option>
                        <option value="uy">Uruguay</option>
                        <option value="va">Vaticano</option>
                        <option value="ve">Venezuela</option>
                    </select>

                    {errors.country && <p>{errors.country.message}</p>}

                </div>

            </div>

            <div className="buttons">
                <button type="submit" className="register-regbutton">Registrar</button>
                {/* <Link to="/Login_user"> */}
                <button className="gologin-button">¿Ya eres miembro?, inicia sesión</button>
                {/* </Link> */}
            </div>
            {/* Mostrar mensaje de error si está presente */}
            {/* {errorMessage && <p>{errorMessage}</p>} */}

        </form>


    );

};

export default Register;