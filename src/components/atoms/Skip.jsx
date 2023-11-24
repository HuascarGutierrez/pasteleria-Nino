import React from 'react'
import "./styles/Skip.css"
import { Link } from 'react-router-dom'
function Skip() {
  return (
    <div className='Skip'>
        <Link to='/menu'>
        <img src='./icons/skipgroup.svg' className='imagen'></img>
        </Link>
    </div>
  )
}
export default Skip