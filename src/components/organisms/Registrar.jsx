import React from 'react'

import TitleLog from '../atoms/TitleLog'
import ForgotP from '../atoms/ForgotP'
import ButtonPrincipal from '../atoms/ButtonPrincipal'
import FormRegister from '../molecules/FormRegister'
import { Link } from 'react-router-dom'

function Registrar() {
  return (
    <>
        <div className='iniciarSesion'>
            <TitleLog title="Registrar"/>
            <FormRegister/>
            <Link to="/usuario">
              <ButtonPrincipal type="Orange" text="Unirse"/>
            </Link>
        </div>
    </>
  )
}

export default Registrar