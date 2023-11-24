import React from 'react'
import "./styles/GoMenu.css"

function GoMenu() {
    const menu='./icons/vectormenu.svg'
  return (
    <>
        <div >
        <i className='iconomenu'>
         <img src={menu}></img>
        </i>
        </div>
    </>
  )
}

export default GoMenu