import './App.css';
import homero from './imagenes/homero.jpg';
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

    const [numClicks, setNumClicks] = useState(0);

    const incrementarClick= () =>{
     setNumClicks(numClicks + 1);
    }
    const reiniciarContador= () =>{
        setNumClicks(0);
       }
   
    return ( 
        <div className = "App" >
           <div>
             <img src = { homero }
                  alt = 'Logo' />
           </div>
           <div>
               <Contador numClicks={numClicks}/> 
               <Boton 
                 texto='Click'
                 esClick={true}
                 manejarClick={incrementarClick}/>

               <Boton 
                 texto='Reiniciar'
                 esClick={false}
                 manejarClick={reiniciarContador}/>
           </div>
        </div>
    );
}

export default App;