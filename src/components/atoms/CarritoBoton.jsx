import React from 'react'
import './styles/CarritoBoton.css'

function CarritoBoton() {
    const carrito = './icons/compra/carrito.svg';
  return (
    <>
    <div>
        <a className='carritoB'><img src={carrito}></img></a>
    </div>
    </>
  )
}

export default CarritoBoton