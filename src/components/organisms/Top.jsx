import React from 'react'
import "./styles/Top.css"
import GoMenu from '../atoms/GoMenu'
import TituloPast from '../molecules/TituloPast'

function Top() {
  return (
    <>
        <div className='top'>
        <GoMenu></GoMenu>
        <TituloPast></TituloPast>
        </div>
    </>
  )
}

export default Top