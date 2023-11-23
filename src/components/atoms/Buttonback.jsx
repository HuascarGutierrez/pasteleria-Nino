import React from 'react'
import "./styles/Buttonback.css"
function Buttonback(props) {
  return (
    <div>
        <a>
            <img src={props.url} className='botonAtras'></img>
        </a>
    </div>
  )
}

export default Buttonback