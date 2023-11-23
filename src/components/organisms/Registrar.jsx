import React from 'react'

import TitleLog from '../atoms/TitleLog'
import ForgotP from '../atoms/ForgotP'
import ButtonPrincipal from '../atoms/ButtonPrincipal'
import FormRegister from '../molecules/FormRegister'

function Registrar() {
  return (
    <>
        <div className='iniciarSesion'>
            <TitleLog title="Registrar"/>
            <FormRegister/>
            <ButtonPrincipal type="Orange" refe="" text="Unirse"/>
        </div>
    </>
  )
}

export default Registrar