import React from 'react';
import "../Card/card.css"
import imagen from "../img/Agnieska.jpg"

const Card = ({ title, image, description }) => {
  
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Agnieska Fronia</h2>
        <img src={imagen} alt={"agnieska"} className="card-image" />
        <div className='card-description'>
          <p>Hola, soy Agnieszka y soy entrenadora certificada de salud hormonal femenina.</p>

          <p>
            ¡Mi misión es crear un futuro donde cada mujer tenga el conocimiento, los recursos y el apoyo que necesita para liderar y vivir con una salud óptima!
          </p>

          <p>
            He luchado durante mucho tiempo con la salud hormonal, el acné, la caída del cabello, el aumento de peso, la ausencia de períodos, el insomnio, los altos niveles de estrés y ansiedad. ¿Suena familiar?
          </p>

          <p>
            Me sentí confundida, cansada e ignorada por los médicos.
          </p>

          <p>
            Me tomó casi 3 años hasta que finalmente me diagnosticaron SOP, pero el único consejo que recibí fue “come menos y haz más ejercicio”, “toma la píldora anticonceptiva” y “vuelve cuando quieras quedar embarazada”.
          </p>

          <p>
            Desde 2015 viajé por Sudamérica e India y estudié diferentes métodos para resolver mis síntomas.
          </p>

          <p>
            Me convertí en profesora de yoga, meditación y respiración y me gradué en una maestría en Medicina Psicológica y Salud Mental relacionada con la dieta, las hormonas y el microbioma intestinal.
          </p>

          <p>
            Creé esta plataforma para todas las mujeres con síndrome de ovario poliquístico que necesitan ayuda para lograr su bienestar hormonal, físico, psicológico y emocional.
          </p>

          <p>
            Quiero brindarte conocimientos, herramientas y técnicas para ayudarte a lograr el equilibrio hormonal y una salud óptima.
          </p>

          <h3>Capacitación:</h3>
          <ul>
            <li>Certificado de Salud Hormonal de la Mujer del Menstrual Institute (EE.UU.)</li>
            <li>Maestría en Medicina Psicológica/Salud Mental (Londres/Berlín)</li>
            <li>100 YMCA / REP Conceptos básicos de yoga para principiantes (Londres)</li>
            <li>200 RYT Yoga Alliance Hatha Yoga Tradicional (Guatemala)</li>
            <li>300 Curso avanzado de instructor de yoga RYT Yoga Alliance (India)</li>
            <li>100 RYT Yoga Alliance Yin Yoga (India)</li>
            <li>Maestría en Masaje Thai-Yoga y Acupresión China (India)</li>
            <li>Certificado CNM en Masaje de Cabeza Indio (Londres)</li>
            <li>Certificado de Meditación Avanzada (Bahamas)</li>
            <li>Certificado de Respiración Nivel 3 (Bahamas)</li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Card;

