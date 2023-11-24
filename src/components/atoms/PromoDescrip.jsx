import React from 'react'
import "./styles/PromoDescrip.css"

function PromoDescrip(props) {
    const ofertas = props.ofertas;
  return (
    <div className='promodesc'>
        <h4 className='titleh4'>{ofertas.title}</h4>
        <div className='especific'>
            <p className='descriptionpromo'>{ofertas.extrainfo}</p>
            <p className='preciopromo'>{"Bs "+ofertas.price}</p>
        </div>
    </div>
  )
}

export default PromoDescrip