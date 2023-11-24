import React from 'react'
import "./styles/TopButtons.css"

function TopMenuGen() {
    const opt='./icons/top/option.svg'
  const front='./icons/top/cart.svg'
  return (
    <>
    <div className="cardButtons">
      <a href="">
       <img className="boton" src={opt}></img>
      </a>
      <a href="">
       <img className="boton" src={front}></img>
      </a>
    </div>
    </>
  )
}

export default TopMenuGen