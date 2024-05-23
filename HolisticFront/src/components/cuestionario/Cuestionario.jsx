import React, { useState } from "react";
import logo from "../../../public/ImagenCuestionario/logoOvaries.png";
import './cuestionario.css';


function Cuestionario() {
  const [preguntas, setPreguntas] = useState([
    {
      pregunta: "1. ¿Cómo describirías tu patrón menstrual?",
      respuestas: [
        { texto: "a) Tengo ciclos menstruales irregulares ( demasiado largos o demasiado cortos )", correcta: true, puntaje: 3 },
        { texto: "b) Mis períodos son consistentemente regulares", correcta: false, puntaje: 0 },
        { texto: "c) No tengo períodos en absoluto", correcta: true, puntaje: 3 }
      ],
      seleccionada: null
    },
    {
      pregunta: "2. ¿Has notado un crecimiento excesivo de vello, especialmente en tu cara?",
      respuestas: [
        { texto: "a) Sí", correcta: true, puntaje: 3 },
        { texto: "b) No", correcta: false, puntaje: 0 }
      ],
      seleccionada: null
    },
    {
      pregunta: "3. ¿Has notado piel excesivamente grasa o aumento del acné de adulto?",
      respuestas: [
        { texto: "a) Sí", correcta: true, puntaje: 3 },
        { texto: "b) No", correcta: false, puntaje: 0 }


      ],
      seleccionada: null
    },

    {
      pregunta: "4. ¿Ha experimentado un aumento de peso inexplicable, especialmente en el abdomen?",
      respuestas: [
        { texto: "a) Sí", correcta: true, puntaje: 3 },
        { texto: "b) No", correcta: false, puntaje: 0 }
      ],
      seleccionada: null
    },

    {
      pregunta: "5. ¿Ha notado una caída o adelgazamiento significativo del cabello, especialmente en la coronilla, ( parte superior o la cima de la cabeza )?",
      respuestas: [
        { texto: "a) Sí", correcta: true, puntaje: 3 },
        { texto: "b) No", correcta: false, puntaje: 0 }
      ],
      seleccionada: null
    },

    {
      pregunta: "6. ¿Tiene zonas de piel oscura, especialmente alrededor del cuello, la ingle o las axilas?",
      respuestas: [
        { texto: "a) Sí", correcta: true, puntaje: 3 },
        { texto: "b) No", correcta: false, puntaje: 0 }
      ],
      seleccionada: null
    },

    {
      pregunta: "7. ¿Llevas más de 6 meses intentando concebir sin éxito?",
      respuestas: [
        { texto: "a) Sí", correcta: true, puntaje: 3 },
        { texto: "b) No", correcta: false, puntaje: 0 },
        { texto: "c) No aplicable", correcta: false, puntaje: 0 }
      ],
      seleccionada: null
    },

    {
      pregunta: "8. ¿Tiene antecedentes familiares de síndrome de ovario poliquístico?",
      respuestas: [
        { texto: "a) Sí, mi mamá", correcta: true, puntaje: 3 },
        { texto: "b) Sí, mi hermana", correcta: true, puntaje: 3 },
        { texto: "c) Sí, otro familiar", correcta: true, puntaje: 1 },
        { texto: "d) No", correcta: false, puntaje: 0 }
      ],
      seleccionada: null
    },

    {
      pregunta: "9. ¿Siente antojos de azúcar, especialmente después de una comida?",
      respuestas: [
        { texto: "a) Sí", correcta: true, puntaje: 1 },
        { texto: "b) No", correcta: false, puntaje: 0 }
      ],
      seleccionada: null
    },

    {
      pregunta: "10. ¿Le han diagnosticado resistencia a la insulina o tiene niveles elevados de azúcar en sangre?",
      respuestas: [
        { texto: "a) Sí", correcta: true, puntaje: 3 },
        { texto: "b) No", correcta: false, puntaje: 0 }
      ],
      seleccionada: null
    },

    {
      pregunta: "11. ¿Cómo describirías tu sueño?",
      respuestas: [
        { texto: "a) Sufro frecuentemente alteraciones del sueño.", correcta: true, puntaje: 3 },
        { texto: "b) Tengo alteraciones ocasionales del sueño.", correcta: true, puntaje: 1 },
        { texto: "c) Duermo bien y me siento descansado por la mañana.", correcta: false, puntaje: 0 }
      ],
      seleccionada: null
    },

    {
      pregunta: "12. ¿Se siente fatigado con frecuencia, incluso después de un descanso adecuado?",
      respuestas: [
        { texto: "a) Sí", correcta: true, puntaje: 1 },
        { texto: "b) No", correcta: false, puntaje: 0 }
      ],
      seleccionada: null
    },

    {
      pregunta: "13. ¿Experimenta con frecuencia problemas digestivos como hinchazón, estreñimiento o diarrea?",
      respuestas: [
        { texto: "a) Sí", correcta: true, puntaje: 1 },
        { texto: "b) No", correcta: false, puntaje: 0 }
      ],
      seleccionada: null
    },
  ]);

  const [puntuacion, setPuntuacion] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const manejarSeleccion = (preguntaIndex, respuestaIndex) => {
    const nuevasPreguntas = [...preguntas];
    nuevasPreguntas[preguntaIndex].seleccionada = respuestaIndex;
    setPreguntas(nuevasPreguntas);
  };

  const obtenerResultado = () => {
    const todasRespondidas = preguntas.every(pregunta => pregunta.seleccionada !== null);

    if (todasRespondidas) {
      let puntos = 0;
      preguntas.forEach(pregunta => {
        if (pregunta.respuestas[pregunta.seleccionada].correcta) {
          puntos += pregunta.respuestas[pregunta.seleccionada].puntaje;
        }
      });
      setPuntuacion(puntos);
      setMostrarResultado(true);
    } else {
      alert("Por favor, revisa y responde todas las preguntas pendientes para obtener tu resultado.");
    }
  };

  return (
    <div className="frame">
      <h1 className="cuestionario">Cuestionario de autoevaluación del SOP</h1>
      <div className="logo-container">
        <img className="logoimag" src={logo} alt="Logo de cuestionario" />
      </div>

      {preguntas.map((pregunta, preguntaIndex) => (
        <div key={preguntaIndex}>
          <h3 className="questions">{pregunta.pregunta}</h3>
          {pregunta.respuestas.map((respuesta, respuestaIndex) => (
            <div key={respuestaIndex}>
              <input
                type="radio"
                name={`pregunta${preguntaIndex}`}
                checked={pregunta.seleccionada === respuestaIndex}
                onChange={() => manejarSeleccion(preguntaIndex, respuestaIndex)}
              />
              <label className="abcd">{respuesta.texto}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={obtenerResultado} className="boton-resultado">Obtener resultado</button>
      {mostrarResultado && (
        <div className="puntuaciones">
          <h2 className="result">Resultado:</h2>
          <p className="punts">Puntuación: {puntuacion}</p>

          {puntuacion >= 0 && puntuacion <= 7 && (
            <p>Menor probabilidad de sufrir síndrome de ovario poliquístico. Si bien pueden presentarse algunos síntomas, el riesgo general es relativamente bajo. Aún así es recomendable controlar los síntomas y consultar con un proveedor de atención médica si surge alguna inquietud.</p>
          )}
          {puntuacion >= 8 && puntuacion <= 20 && (
            <p>Probabilidad moderada de síndrome de ovario poliquístico. Este rango de puntuación sugiere que hay varios síntomas presentes que pueden ser indicativos de síndrome de ovario poliquístico. Se recomienda una evaluación adicional por parte de un proveedor de atención médica para el diagnóstico y tratamiento.</p>
          )}
          {puntuacion >= 21 && (
            <p>Mayor probabilidad de sufrir síndrome de ovario poliquístico. Una puntuación en este rango indica una presencia significativa de síntomas asociados con el síndrome de ovario poliquístico. Se recomienda encarecidamente consultar inmediatamente con un proveedor de atención médica para el diagnóstico y tratamiento.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Cuestionario;
