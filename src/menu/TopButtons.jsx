import "./stylesMenu/TopButtons.css"

function TopButtons() {
  const back='/top/Flecha.svg'
  const front='/top/cart.svg'
  return (
    <>
    <div className="cardButtons">
      <a href="">
       <img className="boton" src={back}></img>
      </a>
      <a>
       <img className="boton" src={front}></img>
      </a>
    </div></>
  )
}

export default TopButtons