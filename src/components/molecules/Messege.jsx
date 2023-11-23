import React from 'react'
import Welcom from '../atoms/Welcom'
import Frase from '../atoms/Frase'
import "./styles/Message.css"
function Messege() {
  return (
    <div className='Mensaje'>
        <Welcom />
        <Frase />
    </div>
  )
}

export default Messege