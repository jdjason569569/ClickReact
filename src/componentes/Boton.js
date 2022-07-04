import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({texto, esClick, manejarClick}){

    return(
        <button 
            className={esClick ? 'boton-clcik' : 'boton-reiniciar'}
            onClick= {() => manejarClick()}>
            {texto}
        </button>
    )

}

export default Boton;