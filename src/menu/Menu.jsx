import Buttons from './Buttons'
import TopButtons from './TopButtons'
import Title from './Title'
import Producto from './Producto'
import {otros} from '../assets/quequesHuminas'
import './stylesMenu/Menu.css'

function Menu() {
  return (
    <>
      <div className='menu'>
        <TopButtons />
        <Title />
        {
            otros.map(otro=>{
              return(
                <Producto producto={otro}/> 
              )
            }
            )
        }
      </div>
    </>
  )
}
export default Menu