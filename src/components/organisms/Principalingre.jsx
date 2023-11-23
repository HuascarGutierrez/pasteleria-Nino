import React from 'react'
import { items } from '../../assets/IngredientsAPI'
import Ingredient from '../molecules/Ingredient'
import "./styles/Principalingre.css"

function Principalingre() {
  return (
    <>
    <section className='principal'>
        <h2>Ingredientes Principales</h2>
        <div className='Ingredientes'>
        {
            items.map(item=>{
            return(
                <Ingredient items={item} />
            )
            }
            )
        }
        </div>
    </section>
    </>
  )
}

export default Principalingre