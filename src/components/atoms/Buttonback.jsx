import React from 'react'
import "./styles/Buttonback.css"
function Buttonback(props) {
  return (
    <div>
        <button>
            <img src={props.url} className='imagen'></img>
        </button>
    </div>
  )
}

export default Buttonback