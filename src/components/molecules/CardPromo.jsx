import React from 'react'
import ImgPromo from '../atoms/ImgPromo'
import PromoDescrip from '../atoms/PromoDescrip'
import './styles/CardPromo.css'

function CardPromo(props) {
    const ofertas = props.ofertas
  return (
    <div className='cardpromo'>
        <ImgPromo ofertas={ofertas} />
        <PromoDescrip ofertas={ofertas} />
    </div>
  )
}

export default CardPromo