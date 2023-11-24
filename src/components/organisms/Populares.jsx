import React from 'react'
import { populares } from '../../assets/PastelesAPI'
import Producto from '../molecules/Producto'
import "./styles/Populares.css"
import { Link } from 'react-router-dom'

function Populares() {
  return (
    <>
    <section className='popular'>
    <h3 className='titleh3'>Productos populares</h3>
        <div>
            {
                populares.map(popular=>{
                    return(
                        <Link to="/cake">
                            <Producto producto={popular} />
                        </Link>
                    )
                })
            }
        </div>
    </section>
    </>
  )
}

export default Populares