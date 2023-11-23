import React from 'react'
import "./styles/Skip.css"
function Skip() {
  return (
    <div className='Skip'>
        <a href='./menu'>
        <img src='./icons/skipgroup.svg' className='imagen'></img>
        </a>
      <a href='../'>
        <img src='./icons/skipgroup.svg' className='imagen'></img>
      </a>
    </div>
  )
}
export default Skip