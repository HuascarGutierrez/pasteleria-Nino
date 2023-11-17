import React from 'react'
import './stylesNouser/GoMenu.css'

export const GoMenu = () => {
  const menu='/nouser/vectormenu.svg'
  return (
    <div >
        <i className='iconomenu'>
         <img src={menu}></img>
        </i>
    </div>
  )
}