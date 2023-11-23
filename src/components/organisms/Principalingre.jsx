import React from 'react'
import { items } from '../../assets/IngredientsAPI'
import Ingredient from '../molecules/Ingredient'
import "./styles/Principalingre.css"

function Principalingre() {
  return (
    <>
    <section>
        <h3 className='titleh3'>Ingredientes Principales</h3>
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