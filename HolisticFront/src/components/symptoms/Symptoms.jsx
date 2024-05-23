import React from 'react';
import './symptoms.css';
import symptoms from '../../../public/image/symptoms.jpg';

const Article = () => {
  return (
    <div className='frame'>


      <div className="symmptoms-container">
        <div className='containertitle'>
          <h2 className='titleblog'>SÍNTOMAS</h2>
        </div>
        <div className="divsymptoms">
          <img className="symptoms" src={symptoms} alt="symptoms" />
          <ul className='containertext'>
            <li className='textsymp'>Muchos síntomas del síndrome de ovario poliquístico (por ejemplo, acné, hirsutismo y aumento de peso) pueden contribuir hacia un mayor riesgo de conductas dietéticas e imagen corporal negativa y podría potencialmente conducir al desarrollo de un trastorno bulímico o trastornos alimentarios subclínicos. (Michelmore et al., 2001).</li>
            <li className='textsymp'>Síntomas de síndrome de ovario poliquístico como infertilidad, hiperandrogenismo, índice de masa corporal elevado (IMC), los trastornos metabólicos y la baja autoestima han demostrado contribuir a salud mental adversa en la población con SOP, incluidos los trastornos alimentarios (Pirotta et al., 2019).</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Article;
