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
        <Messege />
        <Next />
        <Rectangulo />
    </div>
  )
}

export default Inicio1