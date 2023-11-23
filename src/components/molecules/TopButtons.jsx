import "./styles/TopButtons.css"

function TopButtons() {
  const back='./icons/top/Flecha.svg'
  const front='./icons/top/cart.svg'
  return (
    <>
    <div className="cardButtons">
      <a href={"../"}>
       <img className="boton" src={back}></img>
      </a>
      <a href="">
       <img className="boton" src={front}></img>
      </a>
    </div></>
  )
}

export default TopButtons