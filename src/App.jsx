import './App.css'
import {Routes, Route, Outlet, Link} from "react-router-dom"

import Login from './screens/Login'
import Recomendaciones from './components/organisms/Recomendaciones'
import CakeTemplate from './screens/CakeTemplate'
import Inicio1 from './screens/Inicio1'
import Inicio2 from './screens/Inicio2'
import MenuHumintas from './screens/MenuHumintas'
import MenuTortas from './screens/MenuTortas'
import Register from './screens/Register'
import Mgenearal from './screens/Mgenearal'
import { ofertas } from './assets/OfertasAPI'
import Ofertas from './components/organisms/Ofertas'
import Combos from './components/organisms/Combos'
import Opciones from './components/organisms/Opciones'
import Populares from './components/organisms/Populares'
import Noaccount from './components/atoms/Noaccount'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio1 />}> {/*ready */}></Route>
        <Route path="/welcome" element={<Inicio2 />}></Route> {/*ready */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
        <Route path='/tortas' element={<MenuTortas/>}></Route>
        <Route path="/humintas" element={<MenuHumintas/>}></Route>
        <Route path="/cake" element={<CakeTemplate/>}></Route>
        <Route path="/main" element={<Mgenearal/>}></Route>
      </Routes>
    </>
  )
}

export default App
