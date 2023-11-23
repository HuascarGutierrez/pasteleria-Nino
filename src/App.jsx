import './App.css'
import Inicio1 from './screens/Inicio1'
import Inicio2 from './screens/Inicio2'
import MenuHumintas from './screens/MenuHumintas'
import MenuTortas from './screens/MenuTortas'
import Loginimagen from './components/molecules/Loginimagen'
import IniciarSesion from './components/organisms/IniciarSesion'
import Gsesion from './components/molecules/Gsesion'
import Noaccount from './components/atoms/Noaccount'
function App() {

  return (
    <>
      <Loginimagen></Loginimagen>
      <IniciarSesion />
        <Noaccount />
          <Gsesion />
    </>
  )
}

export default App
