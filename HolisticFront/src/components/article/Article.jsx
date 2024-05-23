import React from 'react';
import './article.css';
import food3 from '../../../public/image/food3.png';
import food4 from '../../../public/image/food4.png';
import woman from '../../../public/image/woman.png';

const Article = () => {
  return (
    <div className='frame'>
    <div className="containertitle">
    <h2 className='titleb'> BLOG</h2>
    </div>
    <div className="container">
      <div className="article-container">
        <div className='containertitle'>
        <h2 className='titleblog'>SOP y Alimentación</h2>
        
        </div>
        <img className="imagblog" src={food3} alt="food3" />
        <p className='textblog'>La relación entre las mujeres con síndrome de ovario poliquístico y los trastornos alimentarios es complejo.</p>
        <p className='textblog'>La etiología de los trastornos alimentarios entre mujeres con síndrome de ovario poliquístico aún no se comprende completamente, pero se cree que está relacionado con varios factores, entre ellos:</p>
        <ul>
          <li className='textblog'>Mayor IMC.</li>
          <li className='textblog'>Preocupaciones por el peso y la alimentación.</li>
          <li className='textblog'>Mayor insatisfacción corporal.</li>
          <li className='textblog'>Depresión y ansiedad.</li>
          <li className='textblog'>Peor calidad de vida.</li>
          <li className='textblog'>Mayores restricciones dietéticas.</li>
        </ul>
        <p className='textblog'>Verá, los pacientes con trastornos alimentarios comparten varias características con las mujeres con SOP, que incluyen:</p>
        <ol>
          <li className='textblog'>Mayor riesgo de depresión y ansiedad.</li>
          <li className='textblog'>Alteraciones de la imagen corporal.</li>
          <li className='textblog'>Menor Calidad de Vida.</li>
        </ol>
        <p className='textblog'>Por supuesto, esta es una vista simplificada. Los trastornos alimentarios en el síndrome de ovario poliquístico pueden ocurrir como resultado de una compleja interacción entre influencias hormonales, psicológicas, sociales y metabólicas.</p>
        
      </div>
      <div className="article-container">
      <div className='containertitle'>
      <h2 className='titleblog'>Trastorno por atracón</h2>
      </div>
      <img className="imagblog" src={food4} alt="food4" />
        <ul>
          <li className='textblog'>Se ha observado que los hábitos alimentarios anormales en mujeres con SOP poliquístico podrían verse influidos no sólo por el síndrome en sí, sino también por la inducción de depresión y deterioro en una menor calidad de vida (Asdaq et al., 2020).</li>
          <li className='textblog'>El trastorno por atracón aumenta el peso corporal, por lo que se encontró una correlación significativa entre trastorno por atracón y síndrome de ovario poliquístico (Asdaq et al., 2020).</li>
          <li className='textblog'>Además, el trastorno por atracón y el síndrome de ovario poliquístico están asociados con la diabetes mellitus, obesidad e hipertensión (Lee et al., 2018, Asdaq et al., 2020).</li>
          <li className='textblog'>La mujer con síndrome de ovario poliquístico sufre de:
            <ul>
              <li>Oligomenorrea (sangrado poco frecuente)</li>
              <li>Amenorrea (ausencia de período menstrual)</li>
              <li>Oligoovulación (ovulación poco frecuente)</li>
              <li>Ausencia de ovulación</li>
            </ul>
          </li>
          <li className='textblog'>Los atracones se asociaron significativamente con la amenorrea y la oligomenorrea, principales irregularidades menstruales en pacientes con SOP (Ålgars et al., 2014).</li>
        </ul>
      </div>
      <div className="article-container">
      <div className='containertitle'>
       <h2 className='titleblog'>La ovulación es la clave.</h2>
       </div>
       <img className="imagblog" src={woman} alt="woman" />
        <ul>
          <li className='textblog'>El ciclo menstrual saludable ha sido catalogado como un signo vital.</li>
          <li className='textblog'>Es por eso que su enfoque en el manejo del síndrome de ovario poliquístico debe centrarse en obtener un
            ciclo menstrual regular. No importa si quieres quedar embarazada o no.</li>
          <li className='textblog'>Hay muchos beneficios para la salud de la mujer al tener una dieta.</li>
          <li className='textblog'>Incluyendo: </li>
          <ul>
            <li className='textblog'>Prevención de la osteoporosis</li>
            <li className='textblog'>Accidentes cerebrovasculares</li>
            <li className='textblog'>Demencia</li>
            <li className='textblog'>Cáncer de mama</li>
          </ul>

          <li className='textblog'>Lograr una ovulación regular puede llevar algún tiempo, especialmente después de parar
            una pastilla hormonal ( entre 6 y 12 meses).
            Si está planeando un embarazo, será prudente suspender un tratamiento hormonal.
            Tu cuerpo necesitará tiempo para recuperarse.
            Escuché historias de mujeres jóvenes con SOP que quedaron aterrorizadas por sus médicos.
            diciéndoles “No podrás quedar embarazada”.
            Por suerte, investigué y con
            cambios en mi estilo de vida que ya estaba implementando, después de dos meses de
            ese incidente me vino la regla, y me tomó aproximadamente un año
            para recuperar mi período.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Article;
