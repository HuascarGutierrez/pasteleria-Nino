import React from 'react'
import "./styles/Next.css"
function Next(props) {
  return (
    <div>
        <a href={props.route} className="iconoNext">
        <img src='./icons/gogroup2.svg' className='imagen'></img>
        </a>
    </div>
  )
}

export default Next