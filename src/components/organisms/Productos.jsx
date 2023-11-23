import {Routes, Route, Outlet, Link} from "react-router-dom"

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
                    <Producto producto={producto}/> 
                )
                }
                )
            }
        </div>
        <Routes>
            {
                productos.map(producto=>{
                return(
                    <Route path={"./"+producto.id} element={<CakeTemplate/>}></Route>
                )
                }
                )
            }
        </Routes>
    </>
  )
}

export default Productos