

// import React from "react";
// import logo from "../../../public/ImagenCuestionario/logoOvaries.png";
// import './pretest.css';

// function Pretest({ onStart }) {
//   return (
//     < div className="frame">
//     <div className="pretest-container">
//       <div className="glass-box">
//         <p>
//           ¿Sabías que el 10% de las mujeres sufren de ovario poliquístico y hasta el 70% están sin diagnosticar? 
//           Esta condición puede causar infertilidad y problemas metabólicos, pero tiene tratamiento. ¡No te quedes 
//           con la duda! Rellena nuestro test y toma control de tu salud hoy.
//         </p>
//       </div>
//       <div className="logo-container">
//         <img className="logo" src={logo} alt="Logo de cuestionario" />
//       </div>
//       <h1 className="titulo">Cuestionario de autoevaluación SOP</h1>
//       <div className="info-cuestionario">
//         <p>15 minutos - 13 preguntas</p>
//       </div>
//       <p className="descripcion">
//         Si tienes dudas de si tienes SOP realiza este test.<br />
//       </p>
      
//       <p className="descripcion2">
//         Recuerda acudir a tu médico aún así para poder ser diagnosticado.<br />
//       </p>
//       <button className="boton-iniciar" onClick={onStart}>Iniciar test</button>
//     </div>
//     </div>
//   );
// }
//   export default Pretest;









// import React from "react";
// import logo from "../../../public/ImagenCuestionario/logoOvaries.png";
// import './pretest.css';

// function Pretest({ onStart }) {
//   return (
//     <div className="frame">
//       <div className="pretest-container">
//         <div className="glass-box">
//           <p>
//             ¿Sabías que el 10% de las mujeres sufren de ovario poliquístico y hasta el 70% están sin diagnosticar?
//             Esta condición puede causar infertilidad y problemas metabólicos, pero tiene tratamiento. ¡No te quedes
//             con la duda! Rellena nuestro test y toma control de tu salud hoy.
//           </p>
//         </div>
//         <div className="logo-container">
//           <img className="logo" src={logo} alt="Logo de cuestionario" />
//         </div>
//         <h1 className="titulo">Cuestionario de autoevaluación SOP</h1>
//         <div className="info-cuestionario">
//           <p>15 minutos - 13 preguntas</p>
//         </div>
//         <p className="descripcion">
//           Si tienes dudas de si tienes SOP realiza este test.<br />
//         </p>
//         <p className="descripcion2">
//           Recuerda acudir a tu médico aún así para poder ser diagnosticado.<br />
//         </p>
//         <button className="boton-iniciar" onClick={onStart}>Iniciar test</button>
//       </div>
//     </div>
//   );
// }

// export default Pretest;



import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../public/ImagenCuestionario/logoOvaries.png";
import './pretest.css';

function Pretest() {
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);

  const onStartTest = () => {
   
    if (!usuarioRegistradoOLogueado) {
      setShowAlert(true);
    } else {
      
      history.push("/cuestionario");
    }
  };

  return (
    <div className="frame">
      <div className="pretest-container">
        <div className="glass-box">
          <p>
            ¿Sabías que el 10% de las mujeres sufren de ovario poliquístico y hasta el 70% están sin diagnosticar? Esta condición puede causar infertilidad y problemas metabólicos, pero tiene tratamiento. ¡No te quedes con la duda! Rellena nuestro test y toma control de tu salud hoy.
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
          Si tienes dudas de si tienes SOP realiza este test.
        </p>
        <p className="descripcion2">
          Recuerda acudir a tu médico aún así para poder ser diagnosticado.
        </p>
        <button className="boton-iniciar" onClick={onStartTest}>
          Iniciar test
        </button>
      </div>
      {showAlert && (
        <div className="alert">
          <p>Para realizar el test, primero debes estar registrado o logueado.</p>
          <button onClick={() => history.push("/register")}>Registrarse</button>
          <button onClick={() => history.push("/login")}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Pretest;

