import React from 'react'
import "./styles/TopButtons.css"
import { Link } from 'react-router-dom'

function TopMenuGen() {
    const opt='./icons/top/option.svg'
  const front='./icons/top/cart.svg'
  return (
    <>
    <div className="cardButtons">
      <Link to='/sinUsuario'>
        <a >
        <img className="boton" src={opt}></img>
        </a>
      </Link>
      <a>
       <img className="boton" src={front}></img>
      </a>
    </div>
    </>
  )
}

export default TopMenuGen