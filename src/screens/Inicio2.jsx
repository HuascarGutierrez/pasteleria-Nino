import React from 'react'
import Skip from '../components/atoms/Skip'
import Messege from '../components/molecules/Messege'
import Next from '../components/atoms/Next'
import Rectangulo from '../components/atoms/Rectangulo'
import "./styles/Inicio2.css"
function Inicio2() {
  return (
    <div className='Inicio2'>
        <Skip />
        <Messege titulo="Bienvenido a Pasteleria Nino" frase="Hecho a mano por la propietaria con una pizca de extra love :’v" />
        <Next route="./menu"/>
        <Rectangulo process="./icons/processBar2.svg"/>
    </div>
  )
}

export default Inicio2