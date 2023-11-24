import React from 'react'
import { populares } from '../../assets/PastelesAPI'
import Producto from '../molecules/Producto'
import "./styles/Populares.css"

function Populares() {
  return (
    <>
    <section className='popular'>
    <h3 className='titleh3'>Productos populares</h3>
        <div>
            {
                populares.map(popular=>{
                    return(
                        <Producto producto={popular} />
                    )
                })
            }
        </div>
    </section>
    </>
  )
}

export default Populares