import React from 'react'
import './stylesNouser/ButtonI.css'
import { ButtonI } from './ButtonI'
import { PhotoP} from './PhotoP'
import { TituloPast } from './TituloPast'
import { AcercaD } from './AcercaD'
import { GoMenu } from './GoMenu'
import { Top } from './Top'
import { Options } from './Options'

export const Nouser = () => {
  return (
    <div className='noUser'>
    <Top></Top>
    <Options></Options>
    </div>
  )
}
