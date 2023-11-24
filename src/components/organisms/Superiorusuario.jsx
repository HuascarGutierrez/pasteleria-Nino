import React from 'react'
import Cuadromenu from '../atoms/Cuadromenu'
import Usuarioarriba from '../molecules/Usuarioarriba'
import "./styles/Superiorusuario.css"
import { Link } from 'react-router-dom'

function Superiorusuario() {
  return (
    <div className='Superiorusuario'>
        <Link to="/main">
        <Cuadromenu />
        </Link>
        <Usuarioarriba />
    </div>
  )
}

export default Superiorusuario