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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Hero;
