import React from 'react';
import './styles/Informacion.css';

function Informacion(props) {
    return (
        <div className='Informacion'>
            <h2>Informacion</h2>
           <div className='especifico'> 
            <ul>
                <li>Calorías: Moderadas, en el rango de 300 a 400, basadas en la calidad de los ingredientes.</li>
                <li>Gluten: Adaptable para ser libre de gluten, sustituyendo la harina de trigo con opciones como almendra o arroz.</li>
                <li>Grasas: Equilibradas, con 15-20 gramos por porción para mantener la textura sin comprometer estándares nutricionales.</li>
                <li>Azúcares: Alrededor de 30-40 gramos, provenientes principalmente de leche condensada y crema, ofreciendo dulzura sin excesos.</li>
            </ul>
            
                <img  className='imag' src="/images/persona.png" alt="persona" />
            
        </div>
        </div>
    );
}

export default Informacion;
