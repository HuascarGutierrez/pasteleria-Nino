import React from 'react'
import Comentario from '../molecules/Comentario'
import { comentarios } from '../../assets/ComentariosAPI'
import "./styles/CajaComentarios.css"
import LeaveComent from '../molecules/LeaveComent'

function CajaComentarios() {
  return (
    <section className='CajaComentario'>
        <h3 className='titleh3'>Comentarios</h3>
        <LeaveComent />
        <div>
            <Comentario comentarios={comentarios}/>
        </div>
    </section>
  )
}

export default CajaComentarios