import React from 'react'
import "./styles/Noaccount.css"
function Noaccount(props) {
  return (
    <div className='Noaccount'>
        {props.yn} tiene una cuenta?<a href={props.route}>{props.decision}</a>
    </div>
  )
}

export default Noaccount