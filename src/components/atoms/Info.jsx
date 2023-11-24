import React from 'react'
import './styles/Info.css'

function Info(props) {
    const info = props.info
  return (
    <>
        <div className='info'>
            <div>
              <h2 className='name' ><a href={"./"+info.id}>{info.title}</a></h2>
            </div>
            <p className='cantidad'>{"Cantidad: "+info.available}</p>
        </div>
    </>
  )
}

export default Info