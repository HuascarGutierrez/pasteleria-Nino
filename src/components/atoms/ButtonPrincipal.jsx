import React from 'react'
import "./styles/ButtonPrincipal.css"

function ButtonPrincipal(props) {
  return (
    <>
      <div className={"boton boton"+props.type}>
          <a href={props.refe}>{props.text}</a>
      </div>
    </>
  )
}

export default ButtonPrincipal