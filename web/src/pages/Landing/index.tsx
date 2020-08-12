import React from 'react';
import {Link} from 'react-router-dom';

import logOImg from '../../assents/images/logo.svg';
import landingImg from '../../assents/images/landing.svg';

import studyIcon from '../../assents/images/icons/study.svg';
import giveClassesIcon from '../../assents/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assents/images/icons/purple-heart.svg';

import './styles.css';


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logOImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img 
                src={landingImg} 
                alt="Plataforma de estudos" 
                className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 concexões já realizadas 
                    <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;

