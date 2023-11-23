import React from 'react'
import { recomedations } from '../../assets/RecomendacionesAPI'
import Producto from '../molecules/Producto'
import "./styles/Productos.css"
import "./styles/Principalingre.css"
import TortaEntera from '../molecules/TortaEntera'
import { tamanos } from '../../assets/TortasTamanoAPI'

function SizeCake() {
  return (
    <>
    <section>
        <h3>Tortas Enteras</h3>
        <div className='lista'>
            {
                tamanos.map(tamano=>{
                    return(
                        <TortaEntera producto={tamano} />
                    )
                })
            }
        </div>
    </section>
    </>
  )
}

export default SizeCake