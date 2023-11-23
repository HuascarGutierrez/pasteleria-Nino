import React from 'react'
import "./styles/Noaccount.css"
function Noaccount(props) {
  return (
    <div className='Noaccount'>
        {props.yn} tiene una cuenta?<p>{props.decision}</p>
    </div>
  )
}

export default Noaccount