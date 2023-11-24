import React from 'react'
import './styles/Title.css'

function Title(props) {
  return (
    <>
        <div className='titulo'>
        <h1 className='tituloMenu'>{props.title}</h1>
        </div>
    </>
  )
}

export default Title