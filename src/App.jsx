import './App.css'
import Buttons from './menu/Buttons'
import TopButtons from './menu/TopButtons'
import Title from './menu/Title'
import Producto from './menu/Producto'
import {otros} from './assets/quequesHuminas'

function App() {
  return (
    <>
    <TopButtons />
    <Title />
    <Producto producto={otros}/>
    </>
  )
}

export default App
