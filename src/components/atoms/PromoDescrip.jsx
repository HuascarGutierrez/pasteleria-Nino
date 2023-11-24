import React from 'react'
import "./styles/PromoDescrip.css"

function PromoDescrip(props) {
    const ofertas = props.ofertas;
  return (
    <div className='promodesc'>
        <h4>{ofertas.title}</h4>
        <div className='especific'>
            <p>{ofertas.extrainfo}</p>
            <p>{"Bs "+ofertas.price}</p>
        </div>
    </div>
  )
}

export default PromoDescrip