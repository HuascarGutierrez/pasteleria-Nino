import Buttons from './Buttons'
import TopButtons from './TopButtons'
import Title from './Title'
import Producto from './Producto'
import {pasteles} from '../assets/pasteles'
import './stylesMenu/Menu.css'

function Menu() {
  return (
    <>
      <div className='menu'>
        <TopButtons />
        <Title />
        {
            pasteles.map(pastel=>{
              return(
                <Producto producto={pastel}/> 
              )
            }
            )
        }
      </div>
    </>
  )
}
export default Menu