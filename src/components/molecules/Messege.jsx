import React from 'react'
import Welcom from '../atoms/Welcom'
import Frase from '../atoms/Frase'
import "./styles/Message.css"
function Messege(props) {
  return (
    <div className='Mensaje'>
        <Welcom titulo={props.titulo}/>
        <Frase frase={props.frase}/>
    </div>
  )
}

export default Messege