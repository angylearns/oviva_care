import React, { useState, } from "react";
import { useForm } from 'react-hook-form';
import '../register/register.css';
import { handleRegister } from "../../handlers/registerHandle";
import login_icon from "../../../public/images/icons/login_icon.svg";
import icon_close_eye from "../../../public/images/icons/icon_close_eye.svg";
import icon_open_eye from "../../../public/images/icons/icon_open_eye.svg";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";

function Register() {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(""); 
    const [birthDate, setBirthDate] = useState(null);


    const [showAlert, setShowAlert] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const handleError = (message) => {
        setErrorMessage(message);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const onSubmit = data => {
        console.log('jsx ' + JSON.stringify(data));
        if (data.birth_date) {
            const convertedBirthDate = birthDate.toISOString().split('T')[0];
            data.birth_date = convertedBirthDate;
        }

        handleRegister(data, handleError, setShowAlert, setSuccessMessage)

            .then(() => {
                reset(); 
                setShowAlert(true);
            })
            .catch(error => {
                setErrorMessage('Ocurrió un error al registrar la persona'); 
                setShowAlert(true); 
            });
    };

    const [showPassword, setShowPassword] = useState(false);

    return (

      
        <form className="formulary-all-reg" onSubmit={handleSubmit(onSubmit)}>

            {/* Ventana emergente de alerta */}
            {showAlert && (
                <div className="register-alert">
                    <div className="register-alert-content">
                        <span>{successMessage || errorMessage}</span>
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
                        type={showPassword ? "text" : "password"}
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
                    <button type="button" className="icons-buttons-password" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <img className="icon-close-eye" src={icon_close_eye} /> : <img className="icon-open-eye" src={icon_open_eye} />}
                    </button>
                    {errors.password && <p>{errors.password.message}</p>}

                </div>


                <div className="groupfields2">

                    <p className="text-regbirthdate">Fecha Nacimiento</p>
                    <DatePicker
                        className="field-regbirthdate"
                        selected={birthDate}
                        onChange={(date) => {
                            setBirthDate(date);
                            setValue("birth_date", date); 
                        }}
                        dateFormat="dd-MM-yyyy"
                        placeholderText="Fecha nacimiento"
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
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
                        <option >Albania</option>
                        <option >Alemania</option>
                        <option >Andorra</option>
                        <option >Armenia</option>
                        <option >Austria</option>
                        <option >Azerbaiyán</option>
                        <option >Argentina</option>
                        <option >Bélgica</option>
                        <option >Bolivia</option>
                        <option >Bosnia y Herzegovina</option>
                        <option >Brasil</option>
                        <option >Bulgaria</option>
                        <option >Bielorrusia</option>
                        <option >Chile</option>
                        <option >Colombia</option>
                        <option >Chipre</option>
                        <option >Croacia</option>
                        <option >Dinamarca</option>
                        <option >Ecuador</option>
                        <option >Eslovaquia</option>
                        <option >Eslovenia</option>
                        <option >España</option>
                        <option >Estonia</option>
                        <option >Finlandia</option>
                        <option >Francia</option>
                        <option >Guyana</option>
                        <option >Grecia</option>
                        <option >Hungría</option>
                        <option >Irlanda</option>
                        <option >Islandia</option>
                        <option >Italia</option>
                        <option >Kosovo</option>
                        <option >Letonia</option>
                        <option >Liechtenstein</option>
                        <option >Lituania</option>
                        <option >Luxemburgo</option>
                        <option >Malta</option>
                        <option >Moldavia</option>
                        <option >Mónaco</option>
                        <option >Montenegro</option>
                        <option >Noruega</option>
                        <option >Países Bajos</option>
                        <option >Paraguay</option>
                        <option >Perú</option>
                        <option >Polonia</option>
                        <option >Portugal</option>
                        <option >República Checa</option>
                        <option >Inglaterra</option>
                        <option >Irlanda del Norte</option>
                        <option >Escocia</option>
                        <option >Gales</option>
                        <option >Rumanía</option>
                        <option >Rusia</option>
                        <option >San Marino</option>
                        <option >Suecia</option>
                        <option >Suiza</option>
                        <option >Surinam</option>
                        <option >Turquía</option>
                        <option >Ucrania</option>
                        <option >Uruguay</option>
                        <option >Vaticano</option>
                        <option >Venezuela</option>
                    </select>

                    {errors.country && <p>{errors.country.message}</p>}

                </div>

            </div>

            <div className="buttons">
                <button type="submit" className="register-regbutton">Registrar</button>
                <Link to="/Login">
                <button className="gologin-button">¿Ya eres miembro?, inicia sesión</button>
                </Link>
            </div>

        </form>


    );

};

export default Register;