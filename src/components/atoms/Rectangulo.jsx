import React from 'react'
import "./styles/Rectangulo.css"
function Rectangulo(props) {
  return (
    <div className='Rectangulo'>
        <img src={props.process} className='imagen'></img>
    </div>
  )
}

export default Rectangulo