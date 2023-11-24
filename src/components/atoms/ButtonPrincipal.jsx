import React from 'react'
import "./styles/ButtonPrincipal.css"

function ButtonPrincipal(props) {
  return (
    <>
      <div className={"botonP boton"+props.type}>
          <p>{props.text}</p>
      </div>
    </>
  )
}

export default ButtonPrincipal