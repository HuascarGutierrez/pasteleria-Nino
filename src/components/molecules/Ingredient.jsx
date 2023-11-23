import React from 'react'
import './styles/Ingredient.css'

function Ingredient(props) {
    const items = props.items
  return (
    <div className='ingredient'>
        <img src={items.imgUrl} alt={items.title} />
        <p>{items.title}</p>
    </div>
  )
}

export default Ingredient