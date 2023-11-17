import React from 'react'
import './stylesNouser/GoMenu.css'
import { ButtonI } from './ButtonI'
import { PhotoP} from './PhotoP'
import { TituloPast } from './TituloPast'
import { AcercaD } from './AcercaD'
import { GoMenu } from './GoMenu'

export const Top = () => {
  return (
    <div className='top'>
        <GoMenu></GoMenu>
        <TituloPast></TituloPast>
    </div>
  )
}