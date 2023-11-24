import React from 'react'
import "./styles/Noaccount.css"
import { Link } from 'react-router-dom'


function Noaccount(props) {
  return (
    <div className='Noaccount'>
        {props.yn} tiene una cuenta? <Link to={props.route}><p>{props.decision}</p></Link>
    </div>
  )
}

export default Noaccount