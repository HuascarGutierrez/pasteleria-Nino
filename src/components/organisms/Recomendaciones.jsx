import React from 'react'
import { recomedations } from '../../assets/RecomendacionesAPI'
import Producto from '../molecules/Producto'
import "./styles/Productos.css"
import "./styles/Principalingre.css"


function Recomendaciones() {
  return (
    <>
    <section>
      <h3>Recomendaciones para tu pedido</h3>
      <div className='lista'>
          {
              recomedations.map(recomendation=>{
                  return(
                      <Producto producto={recomendation} />
                  )
              })
          }
      </div> 
    </section>
    </>
  )
}

export default Recomendaciones