import React from 'react';
import whatsappIcon from '../../assents/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/62224847?s=460&u=e520686203ddf7d597518b38cbc7e13139ffce8f&v=4" 
                        alt="Shirlei Machado"/>
                        <div>
                            <strong>Shirlei Machado</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                    É um fato conhecido de todos que um leitor se distrairá.
                     <br/><br/>
                     Com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui",
                    </p>

                    <footer>
                        <p>
                          Preço/hora  
                          <strong>R$80,00</strong>
                        </p>
                        <button type= "button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )

}

export default TeacherItem;