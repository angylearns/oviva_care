import React from 'react';
import '../hero/hero.css';
import youtube from "../../../public/images/icons/youtube.svg";

const Hero = () => {




    return (
        <>
            <div className='hero-container'>
                <div className='hero-youtube'>
                    <img src={youtube} className="youtube-icon" alt="vídeo youtube" />
                </div>
                <div className='hero-text'>
                    <div className='hero-title'>
                        <p className='text-title'>¿Qué es el SOP?</p>
                    </div>
                    <div className='hero-introduction'>
                        <p>
                        El síndrome de ovario poliquístico (SOP) 
                        es una afección endocrina común en mujeres en edad reproductiva. 
                        Se caracteriza por desequilibrios hormonales que pueden provocar 
                        síntomas como períodos menstruales irregulares, exceso de vello corporal, 
                        acné, problemas de fertilidad y quistes en los ovarios. El tratamiento 
                        suele implicar una combinación de cambios en el estilo de vida
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Hero;
