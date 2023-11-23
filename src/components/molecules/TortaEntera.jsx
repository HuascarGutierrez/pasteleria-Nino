import React from 'react'
import Info from '../atoms/Info'
import './styles/Producto.css'
import './styles/TortaEntera.css'
import CarritoBoton from '../atoms/CarritoBoton'
import CantidadBmini from '../atoms/CantidadBmini'

function TortaEntera(props) {
    const producto=props.producto
  return (
    <>
        <div className='producto'>
            <div className='foto'>
                <img src={producto.imgUrl}></img>
            </div>
            <div className='informacion'>
                <Info info={producto}/>
                <div className='bottom'>
                    <div className='precio'><p>{"Bs "+producto.price}</p></div>
                    <CarritoBoton />
                    <CantidadBmini />
                </div>
            </div>
        </div>
    </>
  )
}

export default TortaEntera