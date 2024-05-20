import React from "react";
import logo from "../../../public/ImagenCuestionario/logoOvaries.png";
import './pretest.css';

function PretestCuestionario({ onStart }) {
  return (
    <div className="pretest-container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo de cuestionario" />
      </div>
      <h1 className="titulo">Cuestionario de evaluación SOP</h1>
      <div className="info-cuestionario">
        <p>15 minutos - 13 preguntas</p>
      </div>
      <p className="descripcion">
        Si tienes dudas de si tienes SOP realiza este test.<br />
      </p>
      
      <p className="descripcion2">
        Recuerda acudir a tu médico aún así para poder ser diagnosticado.<br />
      </p>
      <button className="boton-iniciar" onClick={onStart}>Iniciar test</button>
    </div>
  );
}

export default PretestCuestionario;
