import React from 'react'
import Skip from '../components/atoms/Skip'
import Messege from '../components/molecules/Messege'
import Next from '../components/atoms/Next'
import Rectangulo from '../components/atoms/Rectangulo'
import "./styles/Inicio1.css"
function Inicio1() {
  return (
    <div className='Inicio1'>
        <Skip />
        <Messege titulo="Pasteles rapidos y deliciosos" frase="Hecho a mano desde cero con cariño :D" />
        <Next route="./welcome"/>
        <Rectangulo process="./icons/processbar.svg"/>
    </div>
  )
}

export default Inicio1