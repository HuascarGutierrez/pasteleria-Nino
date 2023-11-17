import React from 'react'
import Info from './Info'
import Buttons from './Buttons' 
import './stylesMenu/Producto.css'

function Producto(props) {
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
                    <Buttons/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Producto