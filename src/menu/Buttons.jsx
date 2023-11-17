
function Buttons() {
  const less = '/menu/less.svg';
  const more = '/menu/more.svg';
  return (
    <>
      <div className='botones'>
        <a><img src={less}></img></a>
        <p>00</p>
        <a><img src={more}></img></a>
      </div>
    </>
  )
}

export default Buttons