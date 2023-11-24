import React from 'react'
import './styles/ButtonI.css'
import AcercaD from '../atoms/AcercaD'
import ButtonI from '../atoms/ButtonI'
import { Link } from 'react-router-dom'


function Options() {
  return (
    <>
        <div className='option'>
    <Link to="/login">
    <ButtonI/>
    </Link>
    <AcercaD/>
    </div>
    </>
  )
}

export default Options