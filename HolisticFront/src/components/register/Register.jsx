import React from "react";
import { useForm } from 'react-hook-form';
import '../register/register.css'
import login_icon from "../../../public/images/icons/login_icon.svg"
import { handleRegister } from "../../handlers/registerHandle"


function Register() {
    // maneja el estado del formulario, la validación y el envío del formulario.
    const { register, handleSubmit, formState: { errors } } = useForm();

    //Verifica que se etá conectando con loginhandle (una vez que rellene los datos de loginhandle, verifica que los datos se conectan )
    const onSubmit = data => {
        console.log('jsx ' + JSON.stringify(data));
        handleRegister(data);
    }

    return (

        //  handleSubmit se pasa como manejador del evento onSubmit del formulario. Esto asegura que la validación se ejecute antes de que se envíe el formulario. 
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <img src={login_icon} className="login-icon" alt="imagen login" />
                <h1>Registro Miembro Oviva</h1>
            </div>
            <div className="fieldsblock">
                <div className="groupfields1">

                    <p className="text-regname">Nombre</p>
                    <input className="field-regname" {...register("name", { required: true })} placeholder="Nombre completo" />
                    {errors.name && <p>Este campo es requerido</p>}

                    <p className="text-regemail">Correo Electrónico</p>
                    <input className="field-regemail" {...register("email", { required: true })} placeholder="Correo Electrónico" />
                    {errors.email && <p>Este campo es requerido</p>}

                    <p className="text-regdiagnose">¿Estás diagnosticada?</p>
                    <input className="field-regdiagnose"{...register("diagnosed", { required: true })} placeholder="Sí / No" />
                    {errors.diagnosed && <p>Este campo es requerido</p>}


                </div>

                <div className="groupfields2">
                    <p className="text-regcountry">País</p>
                    <input className="field-regcountry" {...register("country", { required: true })} placeholder="País" />
                    {errors.country && <p>Este campo es requerido</p>}

                    <p className="text-regpassword">Contraseña</p>
                    <input className="field-regpassword" {...register("password", { required: true })} placeholder="Contraseña" />
                    {errors.password && <p>Este campo es requerido</p>}
                </div>

            </div>
            <div className="buttons">
                <button type="submit" className="login-regbutton">Registrar</button>
                <button className="gologin-button">¿Ya eres miembro?, inicia sesión</button>
            </div>


        </form>


    );

};

export default Register;