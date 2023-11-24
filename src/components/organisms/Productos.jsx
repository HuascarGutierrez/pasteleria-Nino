import { Link } from 'react-router-dom'
import React from 'react'
import Producto from '../molecules/Producto'
import "./styles/Productos.css"
import CakeTemplate from "../../screens/CakeTemplate"

function Productos(props) {
    const productos = props.productos
  return (
    <>

        
        <div className='lista'>
            {
                productos.map(producto=>{
                return(
                    <Link to="/cake">
                        <Producto producto={producto}/> 
                    </Link>
                )
                }
                )
            }
        </div>

    </>
  )
}

export default Productos