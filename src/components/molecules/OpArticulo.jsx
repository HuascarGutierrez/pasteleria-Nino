import React from 'react'
import './styles/OpArticulo.css'

function OpArticulo(props) {
    const articulos = props.articulos
  return (
    <>
        <div className='opcion'>
        <img src={articulos.imgUrl} alt={articulos.title} />
        <a href=""><p>{articulos.title}</p></a>  
        </div>  
    </>
    
  )
}

export default OpArticulo