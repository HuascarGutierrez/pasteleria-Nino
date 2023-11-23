import './App.css'
import Inicio1 from './screens/Inicio1'
import Inicio2 from './screens/Inicio2'
import MenuHumintas from './screens/MenuHumintas'
import MenuTortas from './screens/MenuTortas'
import Loginimagen from './components/molecules/Loginimagen'
import TitleLog from './components/atoms/TitleLog'
import InputLog from './components/atoms/InputLog'
function App() {

  return (
    <>
      <Loginimagen></Loginimagen>
      <TitleLog title="Iniciar Sesión"/>
      <InputLog id="email" value="correo electrónico o teléfono"/>
      <InputLog id="password" value="contraseña"/>
    </>
  )
}

export default App
