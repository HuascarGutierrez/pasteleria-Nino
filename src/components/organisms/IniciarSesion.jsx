import React from 'react'
import { Link } from 'react-router-dom'

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
            <Link to={"/main"} className='titleall'>
              <ButtonPrincipal type="Orange" refe="" text="Ingrese su cuenta"/>
            </Link>
        </div>
    </>
  )
}

export default IniciarSesion