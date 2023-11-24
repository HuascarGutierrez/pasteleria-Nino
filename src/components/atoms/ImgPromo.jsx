import React from 'react'
import "./styles/ImgPromo.css"

function ImgPromo(props) {
    const ofertas = props.ofertas;
  return (
    <div className='productPromo'>
        <div className='botones-img'>
            <a href="" className='like'></a>
            <a href="" className='buy'></a>
        </div>    
        <img src={ofertas.imgUrl} alt={ofertas.title} />
    </div>
  )
}

export default ImgPromo