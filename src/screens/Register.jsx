import React from 'react'

import Noaccount from '../components/atoms/Noaccount'
import Gsesion from '../components/molecules/Gsesion'
import Registerimagen from '../components/molecules/Registerimagen'
import Registrar from '../components/organisms/Registrar'

function Register() {
  return (
    <>
        <div>
            <Registerimagen/>
            <Registrar />
            <Noaccount yn="Ya" route="./login" decision="Iniciar sesión"/>
            <Gsesion/>
        </div>
    </>
  )
}

export default Register