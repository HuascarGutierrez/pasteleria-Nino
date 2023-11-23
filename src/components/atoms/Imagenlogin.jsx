import React from 'react'
import "./styles/Imagelogin.css"
function Imagenlogin(props) {
  return (
    <div className='Imagenlogin'>
        <img src={props.imagen} className='imagen'></img>
    </div>
  )
}

export default Imagenlogin