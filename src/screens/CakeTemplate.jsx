
import Principalingre from '../components/organisms/Principalingre'
import Recomendaciones from '../components/organisms/Recomendaciones'
import SizeCake from '../components/organisms/SizeCake'
import TopButtons from '../components/molecules/TopButtons'
import Portions from '../components/organisms/Portions'
import "./styles/CakeTemplate.css"
import CajaComentarios from '../components/organisms/CajaComentarios'
import ProductInformacion from '../components/organisms/ProductInformacion'

function CakeTemplate() {
  return (
    <>
    <div className='cakeTemplate'>
        <TopButtons />
        <br />
        <ProductInformacion />
        <Principalingre />
        <Portions />
        <SizeCake />
        <Recomendaciones />
        <CajaComentarios />
        <div className="Banner">
            <p>Disfruya en Familia con</p>
            <h5> Pateleria <br /> NINO</h5>
        </div>
    </div>
    
    </>
    
  )
}

export default CakeTemplate