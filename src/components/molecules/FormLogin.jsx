import React from 'react'
import InputLog from '../atoms/InputLog'
import "./styles/FormLogin.css"

function FormLogin() {
  return (
    <>
        <div className='FormLogin'>
            <form>
                <InputLog id="email" value="correo electrónico o teléfono"/>
                <InputLog id="password" value="contraseña"/>
            </form>
        </div>
    </>
  )
}

export default FormLogin