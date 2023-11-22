import React from 'react'
import "./styles/Frase.css"
function Frase(props) {
  return (
    <div className='Frase'>
        <h3>{props.frase}</h3>
    </div>
  )
}
export default Frase