import React from 'react'
import OpArticulo from '../molecules/OpArticulo'
import { articulos } from '../../assets/Opciones'
import "./styles/Opciones.css"
import { Link } from 'react-router-dom'

function Opciones() {
  return (
    <>
        <section>
            <h3 className='titleh3'>Las mejores ofertas</h3>
            <div className='OpcionesGeneral'>
                {
                    articulos.map(op=>{
                        return(
                            <Link to={op.route}>
                                    <OpArticulo articulos={op} />
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}

export default Opciones