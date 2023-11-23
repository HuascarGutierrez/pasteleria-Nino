import React from 'react'

import TitleLog from '../atoms/TitleLog'
import ForgotP from '../atoms/ForgotP'
import ButtonPrincipal from '../atoms/ButtonPrincipal'
import FormLogin from '../molecules/FormLogin'

import "./styles/IniciarSesion.css"

function IniciarSesion() {
  return (
    <>
        <div className='iniciarSesion'>
            <TitleLog title="Iniciar Sesión"/>
            <FormLogin/>
            <ForgotP/>
            <ButtonPrincipal type="Orange" refe="" text="Ingrese su cuenta"/>
        </div>
    </>
  )
}

export default IniciarSesion