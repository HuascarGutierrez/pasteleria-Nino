import React from 'react'
import './stylesMenu/Info.css'

function Info(props) {
    const info = props.info
  return (
    <>
        <div>
            <h2 className='name'>{info.title}</h2>
            <p className='cantidad'>{"Cantidad: "+info.available}</p>
        </div>
    </>
  )
}

export default Info