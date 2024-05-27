

import React, { useState } from "react";
import logo from "../../../public/ImagenCuestionario/logoOvaries.png";
import './pretest.css';

function Pretest() {
  const [showMessage, setShowMessage] = useState(false); 
  const handleStart = () =>{
    // crear alert que diga que si no eres miembro tienes que serlo - y aparecen dos botones (iniciar sesión y registrar)
      setShowMessage(true);
    };

  return (
    < div className="frame">
    <div className="pretest-container">
      <div className="glass-box">
        <p>
          ¿Sabías que el 10% de las mujeres sufren de ovario poliquístico y hasta el 70% están sin diagnosticar? 
          Esta condición puede causar infertilidad y problemas metabólicos, pero tiene tratamiento. ¡No te quedes 
          con la duda! Rellena nuestro test y toma control de tu salud hoy.
        </p>
      </div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo de cuestionario" />
      </div>
      <h1 className="titulo">Cuestionario de autoevaluación SOP</h1>
      <div className="info-cuestionario">
        <p>15 minutos - 13 preguntas</p>
      </div>
      <p className="descripcion">
        Si tienes dudas de si tienes SOP realiza este test.<br />
      </p>
      
      <p className="descripcion2">
        Recuerda acudir a tu médico aún así para poder ser diagnosticado.<br />
      </p>
      <button className="boton-iniciar" onClick={handleStart}>Iniciar test</button>
      {showMessage && (
          <div className="message-popup">
            <p>Para realizar el test tienes que ser miembro Oviva, a continuación puedes registrarte o iniciar sesión.</p>
            <div className="button-group">
              <button className="button-register" onClick={() => window.location.href = '/register'}>Regístrate</button>
              <button className="button-login" onClick={() => window.location.href = '/login'}>Inicia sesión</button>
            </div>
          </div>
        )}
    </div>
    </div>
  );
}

export default Pretest;