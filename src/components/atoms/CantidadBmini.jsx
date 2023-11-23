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
                <a><img src={more}></img></a>
                <a><img src={less}></img></a>
            </div>
        </div>
    </>
  )
}

export default CantidadBmini