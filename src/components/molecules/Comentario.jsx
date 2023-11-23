import React from 'react'
import './styles/Comentario.css'

function Comentario(props) {
    const comentarios=props.comentarios
  return (
    <div className='comentariosingle'>
        <hr />
        <img src={comentarios[0].rating} alt={comentarios[0].username} />
        <h4>{comentarios[0].username}</h4>
        <p>{comentarios[0].comentario}</p>
        <p>{comentarios[0].fecha}</p>
    </div>
  )
}

export default Comentario