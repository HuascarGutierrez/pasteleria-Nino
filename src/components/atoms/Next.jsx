import React from 'react'
import "./styles/Next.css"
import { Link } from 'react-router-dom'
function Next(props) {
  return (
    <div>
        <Link to={props.route}>
          <a className='iconoNext'>
              <img src='./icons/gogroup2.svg' className='imagen'></img>
          </a>
        </Link>
    </div>
  )
}

export default Next