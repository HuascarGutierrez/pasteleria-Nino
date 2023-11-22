import React from 'react'
import "./styles/Welcom.css"
function Welcom(props) {
  return (
    <div className='Welcom'>
        <h1>{props.titulo}</h1>
  
    </div>
  )
}

export default Welcom