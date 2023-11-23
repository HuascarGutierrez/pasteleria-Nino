import React from 'react'
import './styles/CantidadB.css'

function CantidadB() {
    const less = './icons/compra/flechaAbajo.svg';
    const more = './icons/compra/flechaArriba.svg';
  return (
    <>
    <div className='cantidadB'>
        <p>2</p>
        <div className='masomenos'>
            <a><img src={more}></img></a>
            <a><img src={less}></img></a>
        </div>
    </div>
    </>
  )
}

export default CantidadB