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
                <img src={producto[0].imgUrl}></img>
            </div>
            <div>
                <Info info={producto[0]}/>
                <div>
                    <div className='precio'><p>{"Bs "+producto[0].price}</p></div>
                    <Buttons/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Producto