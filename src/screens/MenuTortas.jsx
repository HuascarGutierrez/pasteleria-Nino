import React from 'react'
import Title from '../components/atoms/Title'
import TopButtons from '../components/molecules/TopButtons'
import Productos from '../components/organisms/Productos'
import './styles/Menu.css'
import { useState, useEffect } from 'react'



function MenuTortas() {
  
  const [producto, setProducto] = useState([])
  useEffect(() => {
    const obtenerDatos = async () => {
      const res = await fetch('https://6557a042bd4bcef8b612f95b.mockapi.io/pasteles/pasteles');
      const data = await res.json();
      setProducto([...data]);
    }
    obtenerDatos();
  }, [])

  return (
    <>
      <div className='menu'>
          <TopButtons/>
          <Title title='Tortas'/>
          <Productos productos={producto}/>
      </div> 
    </>
  )
}

export default MenuTortas