import React from 'react';
import './experts.css';
import Agnieska from '../../../public/image/Agnieska.png';


const Experts = () => {
    return (
        <>
            <div className="containerexperts">
                <h2 className='titlexperts'> EXPERTOS</h2>
            </div>
            <div className="containerex">
                <div className="experts-container">
                    <div className='containertitle'>
                        <h2 className='title'>Agnieszka</h2>

                    </div>
                    <img className="imagexperts" src={Agnieska} alt="Agnioeska" />
                    <h2 className='textexperts'>Nombre:</h2>
                    <p className='textexperts'>Agnieszka</p>
                    <h2 className='textexperts'>Experta:</h2>
                    <p className='textexperts'>Experta nutricionista e investigadora del síndorme SOP, puede ayudarte a cambiar tu estilo de vida, mediante:</p>
                    <ul>
                        <li className='textexperts'>Alimentación Saludable.</li>
                        <li className='textexperts'>Ejercicios de Yoga y Pilates.</li>
                        <li className='textexperts'>Consejos y conocimientos. </li>
                        <li className='textexperts'>Contacto con expertos.</li>
                    </ul>
                    <h2 className='textexperts'>Contacto:</h2>
                    <p className='textexperts'>agnieszka.fronia@gmail.com</p>

                </div>
                
            </div>

            <div className="containerexperts">
                <h2 className='titlexperts'> CONVIÉRTETE EN UN OVIVA EXPERTO</h2>
            </div>

            <p className='textoviva'>¿Está interesado en contribuir y aparecer en el sitio web y el portal de negocios de OVIVI? ¡Ponte en contacto!</p>

        </>
    );
};

export default Experts;
