import React from 'react'
import TopMenuGen from '../components/molecules/TopMenuGen'
import Recomendaciones from '../components/organisms/Recomendaciones'
import Populares from '../components/organisms/Populares'
import Ofertas from '../components/organisms/Ofertas'
import Combos from '../components/organisms/Combos'
import Opciones from '../components/organisms/Opciones'
import ConUS from '../components/molecules/ConUS'
import HeaderPrincipal from '../components/organisms/HeaderPrincipal'

function Mgenearal() {
  return (
    <>
      <div>
        
        <TopMenuGen />
        <HeaderPrincipal />
        <Ofertas />
        <Combos />
        <Opciones />
        <Populares />
        <ConUS />
      </div>
        
    </>
  )
}

export default Mgenearal