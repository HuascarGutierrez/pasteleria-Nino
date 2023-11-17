import React from 'react'
import {cat} from '../assets/categorias'
import './stylesMenu/Title.css'

function Title() {
    const title=cat
  return (
    <>
        <div className='titulo'>
        <h1>{title[0]}</h1>
        </div>
    </>
  )
}

export default Title