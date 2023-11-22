import React from 'react'
import Producto from '../molecules/Producto'
import "./styles/Productos.css"

function Productos(props) {
    const productos = props.productos
  return (
    <>
        <div className='lista'>
            {
                productos.map(producto=>{
                return(
                    <Producto producto={producto}/> 
                )
                }
                )
            }
        </div>
    </>
  )
}

export default Productos