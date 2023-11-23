import React from 'react'
import './styles/CantidadBmini.css'

function CantidadBmini() {
    const less = './icons/compra/flechaAbajo.svg';
    const more = './icons/compra/flechaArriba.svg';
  return (
    <>
        <div className='cantidadM'>
            <p>0</p>
            <div className='minis'>
                <a href=''><img src={more}></img></a>
                <a href=''><img src={less}></img></a>
            </div>
        </div>
    </>
  )
}

export default CantidadBmini