import React from 'react'
import './stylesNouser/PhotoP.css'

export const PhotoP = () => {
  const pastel='/nouser/pastelito.svg'
  return (
    <div className='pastel'>
        <img src={pastel} alt="pastel" />
    </div>
  )
}