import React from 'react'

import './App.css'
import Inicio1 from './screens/Inicio1'
import Inicio2 from './screens/Inicio2'
import MenuHumintas from './screens/MenuHumintas'
import MenuTortas from './screens/MenuTortas'
import InputLog from './components/atoms/InputLog'
import TitleLog from './components/atoms/TitleLog'
function App() {

  return (
    <>
      <TitleLog title="Iniciar Sesión"/>
      <InputLog text="correo electrónico o teléfasdfasdfono" type/>
      <InputLog text="contrasena"/>
    </>
  )
}

export default App
