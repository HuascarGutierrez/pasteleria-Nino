import React from 'react'
import Cuadromenu from '../atoms/Cuadromenu'
import Usuarioarriba from '../molecules/Usuarioarriba'
import "./styles/Superiorusuario.css"
function Superiorusuario() {
  return (
    <div className='Superiorusuario'>
        <Cuadromenu />
        <Usuarioarriba />
    </div>
  )
}

export default Superiorusuario