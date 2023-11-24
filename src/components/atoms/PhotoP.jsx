import React from 'react'
import "./styles/PhotoP.css"

function PhotoP() {
    const pastel = './images/pastel.png'
  return (
    <div className='pastel'>
        <img src={pastel} alt="pastel" />
    </div>
  )
}

export default PhotoP