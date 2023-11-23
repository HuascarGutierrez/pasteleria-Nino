import React from 'react'
import Loginimagen from '../components/molecules/Loginimagen'
import IniciarSesion from '../components/organisms/IniciarSesion'
import Noaccount from '../components/atoms/Noaccount'
import Gsesion from '../components/molecules/Gsesion'

function Login() {
  return (
    <>
        <div>
            <Loginimagen></Loginimagen>
            <IniciarSesion />
            <Noaccount/>
            <Gsesion/>
        </div>
    </>
  )
}

export default Login