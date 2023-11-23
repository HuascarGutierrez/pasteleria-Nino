import React from 'react'
import {useState, useEffect} from 'react'
import Title from '../components/atoms/Title'
import TopButtons from '../components/molecules/TopButtons'
import Productos from '../components/organisms/Productos'

function MenuTortas() {
  
  const [otros, setOtros] = useState([])
  useEffect(() => {
    const obtenerDatos = async () => {
      const res = await fetch('https://6557a042bd4bcef8b612f95b.mockapi.io/pasteles/pasteles');
      const data = await res.json();
      setOtros([...data]);
    }
    obtenerDatos();
  }, [])

  return (
    <>
      <div>
        <TopButtons/>
        <Title title='Tortas'/>
        <Productos productos={otros}/>
      </div> 
    </>
  )
}

export default MenuTortas